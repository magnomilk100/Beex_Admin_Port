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
import actions from 'src/modules/ordem/list/ordemListActions';
import selectors from 'src/modules/ordem/list/ordemListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import ordemEnumerators from 'src/modules/ordem/ordemEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ContaAutocompleteFormItem from 'src/view/conta/autocomplete/ContaAutocompleteFormItem';
import RoboAutocompleteFormItem from 'src/view/robo/autocomplete/RoboAutocompleteFormItem';

const schema = yup.object().shape({
  conta: yupFilterSchemas.relationToOne(
    i18n('entities.ordem.fields.conta'),
  ),
  tipo: yupFilterSchemas.enumerator(
    i18n('entities.ordem.fields.tipo'),
  ),
  direcao: yupFilterSchemas.enumerator(
    i18n('entities.ordem.fields.direcao'),
  ),
  precoEntradaRange: yupFilterSchemas.decimalRange(
    i18n('entities.ordem.fields.precoEntradaRange'),
  ),
  robo: yupFilterSchemas.relationToOne(
    i18n('entities.ordem.fields.robo'),
  ),
  versao: yupFilterSchemas.string(
    i18n('entities.ordem.fields.versao'),
  ),
  dataHoraRange: yupFilterSchemas.datetimeRange(
    i18n('entities.ordem.fields.dataHoraRange'),
  ),
});

const emptyValues = {
  conta: null,
  tipo: null,
  direcao: null,
  precoEntradaRange: [],
  robo: null,
  versao: null,
  dataHoraRange: [],
}

const previewRenders = {
  conta: {
      label: i18n('entities.ordem.fields.conta'),
      render: filterRenders.relationToOne(),
    },
  tipo: {
    label: i18n('entities.ordem.fields.tipo'),
    render: filterRenders.enumerator('entities.ordem.enumerators.tipo',),
  },
  direcao: {
    label: i18n('entities.ordem.fields.direcao'),
    render: filterRenders.enumerator('entities.ordem.enumerators.direcao',),
  },
  precoEntradaRange: {
    label: i18n('entities.ordem.fields.precoEntradaRange'),
    render: filterRenders.decimalRange(),
  },
  robo: {
      label: i18n('entities.ordem.fields.robo'),
      render: filterRenders.relationToOne(),
    },
  versao: {
    label: i18n('entities.ordem.fields.versao'),
    render: filterRenders.generic(),
  },
  dataHoraRange: {
    label: i18n('entities.ordem.fields.dataHoraRange'),
    render: filterRenders.datetimeRange(),
  },
}

function OrdemListFilter(props) {
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
                  <ContaAutocompleteFormItem  
                    name="conta"
                    label={i18n('entities.ordem.fields.conta')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="tipo"
                    label={i18n('entities.ordem.fields.tipo')}
                    options={ordemEnumerators.tipo.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.ordem.enumerators.tipo.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="direcao"
                    label={i18n('entities.ordem.fields.direcao')}
                    options={ordemEnumerators.direcao.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.ordem.enumerators.direcao.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="precoEntradaRange"
                    label={i18n('entities.ordem.fields.precoEntradaRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RoboAutocompleteFormItem  
                    name="robo"
                    label={i18n('entities.ordem.fields.robo')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="versao"
                    label={i18n('entities.ordem.fields.versao')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dataHoraRange"
                    label={i18n('entities.ordem.fields.dataHoraRange')}    
                    showTime
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

export default OrdemListFilter;