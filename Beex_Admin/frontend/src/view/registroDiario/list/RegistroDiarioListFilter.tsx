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
import actions from 'src/modules/registroDiario/list/registroDiarioListActions';
import selectors from 'src/modules/registroDiario/list/registroDiarioListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ClienteAutocompleteFormItem from 'src/view/cliente/autocomplete/ClienteAutocompleteFormItem';
import RoboAutocompleteFormItem from 'src/view/robo/autocomplete/RoboAutocompleteFormItem';
import ContaAutocompleteFormItem from 'src/view/conta/autocomplete/ContaAutocompleteFormItem';

const schema = yup.object().shape({
  cliente: yupFilterSchemas.relationToOne(
    i18n('entities.registroDiario.fields.cliente'),
  ),
  robo: yupFilterSchemas.relationToOne(
    i18n('entities.registroDiario.fields.robo'),
  ),
  versao: yupFilterSchemas.string(
    i18n('entities.registroDiario.fields.versao'),
  ),
  numeroMagico: yupFilterSchemas.string(
    i18n('entities.registroDiario.fields.numeroMagico'),
  ),
  qtdContratosRange: yupFilterSchemas.integerRange(
    i18n('entities.registroDiario.fields.qtdContratosRange'),
  ),
  dataRange: yupFilterSchemas.dateRange(
    i18n('entities.registroDiario.fields.dataRange'),
  ),
  numeroChart: yupFilterSchemas.string(
    i18n('entities.registroDiario.fields.numeroChart'),
  ),
  conta: yupFilterSchemas.relationToOne(
    i18n('entities.registroDiario.fields.conta'),
  ),
});

const emptyValues = {
  cliente: null,
  robo: null,
  versao: null,
  numeroMagico: null,
  qtdContratosRange: [],
  dataRange: [],
  numeroChart: null,
  conta: null,
}

const previewRenders = {
  cliente: {
      label: i18n('entities.registroDiario.fields.cliente'),
      render: filterRenders.relationToOne(),
    },
  robo: {
      label: i18n('entities.registroDiario.fields.robo'),
      render: filterRenders.relationToOne(),
    },
  versao: {
    label: i18n('entities.registroDiario.fields.versao'),
    render: filterRenders.generic(),
  },
  numeroMagico: {
    label: i18n('entities.registroDiario.fields.numeroMagico'),
    render: filterRenders.generic(),
  },
  qtdContratosRange: {
    label: i18n('entities.registroDiario.fields.qtdContratosRange'),
    render: filterRenders.range(),
  },
  dataRange: {
    label: i18n('entities.registroDiario.fields.dataRange'),
    render: filterRenders.dateRange(),
  },
  numeroChart: {
    label: i18n('entities.registroDiario.fields.numeroChart'),
    render: filterRenders.generic(),
  },
  conta: {
      label: i18n('entities.registroDiario.fields.conta'),
      render: filterRenders.relationToOne(),
    },
}

function RegistroDiarioListFilter(props) {
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
                  <ClienteAutocompleteFormItem  
                    name="cliente"
                    label={i18n('entities.registroDiario.fields.cliente')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RoboAutocompleteFormItem  
                    name="robo"
                    label={i18n('entities.registroDiario.fields.robo')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="versao"
                    label={i18n('entities.registroDiario.fields.versao')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="numeroMagico"
                    label={i18n('entities.registroDiario.fields.numeroMagico')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="qtdContratosRange"
                    label={i18n('entities.registroDiario.fields.qtdContratosRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dataRange"
                    label={i18n('entities.registroDiario.fields.dataRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="numeroChart"
                    label={i18n('entities.registroDiario.fields.numeroChart')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ContaAutocompleteFormItem  
                    name="conta"
                    label={i18n('entities.registroDiario.fields.conta')}        
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

export default RegistroDiarioListFilter;