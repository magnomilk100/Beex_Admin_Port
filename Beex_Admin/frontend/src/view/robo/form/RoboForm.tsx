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
import roboEnumerators from 'src/modules/robo/roboEnumerators';

const schema = yup.object().shape({
  nome: yupFormSchemas.string(
    i18n('entities.robo.fields.nome'),
    {
      "required": true
    },
  ),
  ativo: yupFormSchemas.enumerator(
    i18n('entities.robo.fields.ativo'),
    {
      "required": true,
      "options": roboEnumerators.ativo
    },
  ),
});

function RoboForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nome: record.nome,
      ativo: record.ativo,
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
              <InputFormItem
                name="nome"
                label={i18n('entities.robo.fields.nome')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="ativo"
                label={i18n('entities.robo.fields.ativo')}
              hint={i18n('entities.robo.hints.ativo')}
                options={roboEnumerators.ativo.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.robo.enumerators.ativo.${value}`,
                    ),
                  }),
                )}
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

export default RoboForm;
