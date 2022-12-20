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
import actions from 'src/modules/checkList/list/checkListListActions';
import selectors from 'src/modules/checkList/list/checkListListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import checkListEnumerators from 'src/modules/checkList/checkListEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import ClienteAutocompleteFormItem from 'src/view/cliente/autocomplete/ClienteAutocompleteFormItem';

const schema = yup.object().shape({
  dataRange: yupFilterSchemas.datetimeRange(
    i18n('entities.checkList.fields.dataRange'),
  ),
  cliente: yupFilterSchemas.relationToOne(
    i18n('entities.checkList.fields.cliente'),
  ),
  aceiteDeRisco: yupFilterSchemas.enumerator(
    i18n('entities.checkList.fields.aceiteDeRisco'),
  ),
  emailBoasVindas: yupFilterSchemas.enumerator(
    i18n('entities.checkList.fields.emailBoasVindas'),
  ),
  clienteRoundCube: yupFilterSchemas.enumerator(
    i18n('entities.checkList.fields.clienteRoundCube'),
  ),
  suportePrimario: yupFilterSchemas.enumerator(
    i18n('entities.checkList.fields.suportePrimario'),
  ),
  enviadoDe: yupFilterSchemas.relationToOne(
    i18n('entities.checkList.fields.enviadoDe'),
  ),
  processandoPor: yupFilterSchemas.relationToOne(
    i18n('entities.checkList.fields.processandoPor'),
  ),
  observacao: yupFilterSchemas.string(
    i18n('entities.checkList.fields.observacao'),
  ),
});

const emptyValues = {
  dataRange: [],
  cliente: null,
  aceiteDeRisco: null,
  emailBoasVindas: null,
  clienteRoundCube: null,
  suportePrimario: null,
  enviadoDe: null,
  processandoPor: null,
  observacao: null,
}

const previewRenders = {
  dataRange: {
    label: i18n('entities.checkList.fields.dataRange'),
    render: filterRenders.datetimeRange(),
  },
  cliente: {
      label: i18n('entities.checkList.fields.cliente'),
      render: filterRenders.relationToOne(),
    },
  aceiteDeRisco: {
    label: i18n('entities.checkList.fields.aceiteDeRisco'),
    render: filterRenders.enumerator('entities.checkList.enumerators.aceiteDeRisco',),
  },
  emailBoasVindas: {
    label: i18n('entities.checkList.fields.emailBoasVindas'),
    render: filterRenders.enumerator('entities.checkList.enumerators.emailBoasVindas',),
  },
  clienteRoundCube: {
    label: i18n('entities.checkList.fields.clienteRoundCube'),
    render: filterRenders.enumerator('entities.checkList.enumerators.clienteRoundCube',),
  },
  suportePrimario: {
    label: i18n('entities.checkList.fields.suportePrimario'),
    render: filterRenders.enumerator('entities.checkList.enumerators.suportePrimario',),
  },
  enviadoDe: {
    label: i18n('entities.checkList.fields.enviadoDe'),
    render: filterRenders.relationToOne(),
  },
  processandoPor: {
    label: i18n('entities.checkList.fields.processandoPor'),
    render: filterRenders.relationToOne(),
  },
  observacao: {
    label: i18n('entities.checkList.fields.observacao'),
    render: filterRenders.generic(),
  },
}

function CheckListListFilter(props) {
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
                    label={i18n('entities.checkList.fields.dataRange')}    
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ClienteAutocompleteFormItem  
                    name="cliente"
                    label={i18n('entities.checkList.fields.cliente')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="aceiteDeRisco"
                    label={i18n('entities.checkList.fields.aceiteDeRisco')}
                    options={checkListEnumerators.aceiteDeRisco.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.checkList.enumerators.aceiteDeRisco.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="emailBoasVindas"
                    label={i18n('entities.checkList.fields.emailBoasVindas')}
                    options={checkListEnumerators.emailBoasVindas.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.checkList.enumerators.emailBoasVindas.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="clienteRoundCube"
                    label={i18n('entities.checkList.fields.clienteRoundCube')}
                    options={checkListEnumerators.clienteRoundCube.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.checkList.enumerators.clienteRoundCube.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>

                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="suportePrimario"
                    label={i18n('entities.checkList.fields.suportePrimario')}
                    options={checkListEnumerators.suportePrimario.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.checkList.enumerators.suportePrimario.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="enviadoDe"
                    label={i18n('entities.checkList.fields.enviadoDe')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="processandoPor"
                    label={i18n('entities.checkList.fields.processandoPor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="observacao"
                    label={i18n('entities.checkList.fields.observacao')}      
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

export default CheckListListFilter;