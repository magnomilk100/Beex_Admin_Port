import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ClienteAutocompleteFormItem from 'src/view/cliente/autocomplete/ClienteAutocompleteFormItem';
import RoboAutocompleteFormItem from 'src/view/robo/autocomplete/RoboAutocompleteFormItem';
import ContaAutocompleteFormItem from 'src/view/conta/autocomplete/ContaAutocompleteFormItem';

const schema = yup.object().shape({
  cliente: yupFormSchemas.relationToOne(
    i18n('entities.registroDiario.fields.cliente'),
    {
      "required": true
    },
  ),
  robo: yupFormSchemas.relationToOne(
    i18n('entities.registroDiario.fields.robo'),
    {
      "required": true
    },
  ),
  versao: yupFormSchemas.string(
    i18n('entities.registroDiario.fields.versao'),
    {
      "required": true
    },
  ),
  numeroMagico: yupFormSchemas.string(
    i18n('entities.registroDiario.fields.numeroMagico'),
    {
      "required": true
    },
  ),
  qtdContratos: yupFormSchemas.integer(
    i18n('entities.registroDiario.fields.qtdContratos'),
    {
      "required": true
    },
  ),
  data: yupFormSchemas.date(
    i18n('entities.registroDiario.fields.data'),
    {
      "required": true
    },
  ),
  numeroChart: yupFormSchemas.string(
    i18n('entities.registroDiario.fields.numeroChart'),
    {
      "required": true
    },
  ),
  conta: yupFormSchemas.relationToOne(
    i18n('entities.registroDiario.fields.conta'),
    {
      "required": true
    },
  ),
});

function RegistroDiarioForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      cliente: record.cliente,
      robo: record.robo,
      versao: record.versao,
      numeroMagico: record.numeroMagico,
      qtdContratos: record.qtdContratos,
      data: record.data ? moment(record.data, 'YYYY-MM-DD') : null,
      numeroChart: record.numeroChart,
      conta: record.conta,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ClienteAutocompleteFormItem  
                name="cliente"
                label={i18n('entities.registroDiario.fields.cliente')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RoboAutocompleteFormItem  
                name="robo"
                label={i18n('entities.registroDiario.fields.robo')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="versao"
                label={i18n('entities.registroDiario.fields.versao')}
              hint={i18n('entities.registroDiario.hints.versao')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="numeroMagico"
                label={i18n('entities.registroDiario.fields.numeroMagico')}
              hint={i18n('entities.registroDiario.hints.numeroMagico')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="qtdContratos"
                label={i18n('entities.registroDiario.fields.qtdContratos')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="data"
                label={i18n('entities.registroDiario.fields.data')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="numeroChart"
                label={i18n('entities.registroDiario.fields.numeroChart')}
              hint={i18n('entities.registroDiario.hints.numeroChart')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ContaAutocompleteFormItem  
                name="conta"
                label={i18n('entities.registroDiario.fields.conta')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default RegistroDiarioForm;
