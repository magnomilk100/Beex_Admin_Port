import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/parametrosRobo/list/parametrosRoboListActions';
import selectors from 'src/modules/parametrosRobo/list/parametrosRoboListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import parametrosRoboEnumerators from 'src/modules/parametrosRobo/parametrosRoboEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import RoboAutocompleteFormItem from 'src/view/robo/autocomplete/RoboAutocompleteFormItem';

const schema = yup.object().shape({
  dataRange: yupFilterSchemas.datetimeRange(
    i18n('entities.parametrosRobo.fields.dataRange'),
  ),
  robo: yupFilterSchemas.relationToOne(
    i18n('entities.parametrosRobo.fields.robo'),
  ),
  versao: yupFilterSchemas.string(
    i18n('entities.parametrosRobo.fields.versao'),
  ),
  configuracao: yupFilterSchemas.enumerator(
    i18n('entities.parametrosRobo.fields.configuracao'),
  ),
  observacao: yupFilterSchemas.string(
    i18n('entities.parametrosRobo.fields.observacao'),
  ),
  parametros: yupFilterSchemas.string(
    i18n('entities.parametrosRobo.fields.parametros'),
  ),
});

const emptyValues = {
  dataRange: [],
  robo: null,
  versao: null,
  configuracao: null,
  observacao: null,
  parametros: null,
}

const previewRenders = {
  dataRange: {
    label: i18n('entities.parametrosRobo.fields.dataRange'),
    render: filterRenders.datetimeRange(),
  },
  robo: {
      label: i18n('entities.parametrosRobo.fields.robo'),
      render: filterRenders.relationToOne(),
    },
  versao: {
    label: i18n('entities.parametrosRobo.fields.versao'),
    render: filterRenders.generic(),
  },
  configuracao: {
    label: i18n('entities.parametrosRobo.fields.configuracao'),
    render: filterRenders.enumerator('entities.parametrosRobo.enumerators.configuracao',),
  },
  observacao: {
    label: i18n('entities.parametrosRobo.fields.observacao'),
    render: filterRenders.generic(),
  },
  parametros: {
    label: i18n('entities.parametrosRobo.fields.parametros'),
    render: filterRenders.generic(),
  },
}

function ParametrosRoboListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dataRange"
                    label={i18n('entities.parametrosRobo.fields.dataRange')}    
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RoboAutocompleteFormItem  
                    name="robo"
                    label={i18n('entities.parametrosRobo.fields.robo')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="versao"
                    label={i18n('entities.parametrosRobo.fields.versao')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="configuracao"
                    label={i18n('entities.parametrosRobo.fields.configuracao')}
                    options={parametrosRoboEnumerators.configuracao.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.parametrosRobo.enumerators.configuracao.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="observacao"
                    label={i18n('entities.parametrosRobo.fields.observacao')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="parametros"
                    label={i18n('entities.parametrosRobo.fields.parametros')}      
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default ParametrosRoboListFilter;