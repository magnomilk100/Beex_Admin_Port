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
import ClienteAutocompleteFormItem from 'src/view/cliente/autocomplete/ClienteAutocompleteFormItem';
import CorretoraAutocompleteFormItem from 'src/view/corretora/autocomplete/CorretoraAutocompleteFormItem';

const schema = yup.object().shape({
  cliente: yupFormSchemas.relationToOne(
    i18n('entities.conta.fields.cliente'),
    {
      "required": true
    },
  ),
  corretora: yupFormSchemas.relationToOne(
    i18n('entities.conta.fields.corretora'),
    {
      "required": true
    },
  ),
  idMetatraderCorretora: yupFormSchemas.string(
    i18n('entities.conta.fields.idMetatraderCorretora'),
    {
      "required": true
    },
  ),
});

function ContaForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      cliente: record.cliente,
      corretora: record.corretora,
      idMetatraderCorretora: record.idMetatraderCorretora,
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
                label={i18n('entities.conta.fields.cliente')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CorretoraAutocompleteFormItem  
                name="corretora"
                label={i18n('entities.conta.fields.corretora')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="idMetatraderCorretora"
                label={i18n('entities.conta.fields.idMetatraderCorretora')}
              hint={i18n('entities.conta.hints.idMetatraderCorretora')}  
                required={true}
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

export default ContaForm;
