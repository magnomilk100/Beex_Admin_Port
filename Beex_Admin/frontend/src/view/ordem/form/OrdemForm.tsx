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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import ordemEnumerators from 'src/modules/ordem/ordemEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ContaAutocompleteFormItem from 'src/view/conta/autocomplete/ContaAutocompleteFormItem';
import RoboAutocompleteFormItem from 'src/view/robo/autocomplete/RoboAutocompleteFormItem';

const schema = yup.object().shape({
  conta: yupFormSchemas.relationToOne(
    i18n('entities.ordem.fields.conta'),
    {
      "required": true
    },
  ),
  tipo: yupFormSchemas.enumerator(
    i18n('entities.ordem.fields.tipo'),
    {
      "required": true,
      "options": ordemEnumerators.tipo
    },
  ),
  direcao: yupFormSchemas.enumerator(
    i18n('entities.ordem.fields.direcao'),
    {
      "required": true,
      "options": ordemEnumerators.direcao
    },
  ),
  precoEntrada: yupFormSchemas.decimal(
    i18n('entities.ordem.fields.precoEntrada'),
    {
      "required": true
    },
  ),
  robo: yupFormSchemas.relationToOne(
    i18n('entities.ordem.fields.robo'),
    {
      "required": true
    },
  ),
  versao: yupFormSchemas.string(
    i18n('entities.ordem.fields.versao'),
    {
      "required": true
    },
  ),
  dataHora: yupFormSchemas.datetime(
    i18n('entities.ordem.fields.dataHora'),
    {
      "required": true
    },
  ),
});

function OrdemForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      conta: record.conta,
      tipo: record.tipo,
      direcao: record.direcao,
      precoEntrada: record.precoEntrada,
      robo: record.robo,
      versao: record.versao,
      dataHora: record.dataHora ? moment(record.dataHora) : null,
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
              <ContaAutocompleteFormItem  
                name="conta"
                label={i18n('entities.ordem.fields.conta')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="tipo"
                label={i18n('entities.ordem.fields.tipo')}
              hint={i18n('entities.ordem.hints.tipo')}
                options={ordemEnumerators.tipo.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.ordem.enumerators.tipo.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="direcao"
                label={i18n('entities.ordem.fields.direcao')}
              hint={i18n('entities.ordem.hints.direcao')}
                options={ordemEnumerators.direcao.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.ordem.enumerators.direcao.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="precoEntrada"
                label={i18n('entities.ordem.fields.precoEntrada')}
              hint={i18n('entities.ordem.hints.precoEntrada')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RoboAutocompleteFormItem  
                name="robo"
                label={i18n('entities.ordem.fields.robo')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="versao"
                label={i18n('entities.ordem.fields.versao')}
              hint={i18n('entities.ordem.hints.versao')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dataHora"
                label={i18n('entities.ordem.fields.dataHora')}
              hint={i18n('entities.ordem.hints.dataHora')}
                required={true}
                showTime
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

export default OrdemForm;
