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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import checkListEnumerators from 'src/modules/checkList/checkListEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ClienteAutocompleteFormItem from 'src/view/cliente/autocomplete/ClienteAutocompleteFormItem';

const schema = yup.object().shape({
  data: yupFormSchemas.datetime(
    i18n('entities.checkList.fields.data'),
    {
      "required": true
    },
  ),
  cliente: yupFormSchemas.relationToOne(
    i18n('entities.checkList.fields.cliente'),
    {
      "required": true
    },
  ),
  aceiteDeRisco: yupFormSchemas.enumerator(
    i18n('entities.checkList.fields.aceiteDeRisco'),
    {
      "required": true,
      "options": checkListEnumerators.aceiteDeRisco
    },
  ),
  emailBoasVindas: yupFormSchemas.enumerator(
    i18n('entities.checkList.fields.emailBoasVindas'),
    {
      "required": true,
      "options": checkListEnumerators.emailBoasVindas
    },
  ),
  clienteRoundCube: yupFormSchemas.enumerator(
    i18n('entities.checkList.fields.clienteRoundCube'),
    {
      "required": true,
      "options": checkListEnumerators.clienteRoundCube
    },
  ),
  suportePrimario: yupFormSchemas.enumerator(
    i18n('entities.checkList.fields.suportePrimario'),
    {
      "required": true,
      "options": checkListEnumerators.suportePrimario
    },
  ),
  enviadoDe: yupFormSchemas.relationToOne(
    i18n('entities.checkList.fields.enviadoDe'),
    {
      "required": true
    },
  ),
  processandoPor: yupFormSchemas.relationToOne(
    i18n('entities.checkList.fields.processandoPor'),
    {},
  ),
  observacao: yupFormSchemas.string(
    i18n('entities.checkList.fields.observacao'),
    {},
  ),
});

function CheckListForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      data: record.data ? moment(record.data) : null,
      cliente: record.cliente,
      aceiteDeRisco: record.aceiteDeRisco,
      emailBoasVindas: record.emailBoasVindas,
      clienteRoundCube: record.clienteRoundCube,
      suportePrimario: record.suportePrimario,
      enviadoDe: record.enviadoDe,
      processandoPor: record.processandoPor,
      observacao: record.observacao,
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
              <DatePickerFormItem
                name="data"
                label={i18n('entities.checkList.fields.data')}
                required={true}
                showTime
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ClienteAutocompleteFormItem  
                name="cliente"
                label={i18n('entities.checkList.fields.cliente')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
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
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
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
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
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
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="suportePrimario"
                label={i18n('entities.checkList.fields.suportePrimario')}
              hint={i18n('entities.checkList.hints.suportePrimario')}
                options={checkListEnumerators.suportePrimario.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.checkList.enumerators.suportePrimario.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="enviadoDe"
                label={i18n('entities.checkList.fields.enviadoDe')}
              hint={i18n('entities.checkList.hints.enviadoDe')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="processandoPor"
                label={i18n('entities.checkList.fields.processandoPor')}
              hint={i18n('entities.checkList.hints.processandoPor')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="observacao"
                label={i18n('entities.checkList.fields.observacao')}
              hint={i18n('entities.checkList.hints.observacao')}  
                required={false}
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

export default CheckListForm;
