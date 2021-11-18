import './App.css';
import { Formik } from "formik";
import * as Yup from "yup";
import { postImei } from './actions'
import {
  Button,
  TextField,
} from "@mui/material";

function App() {

  return (
    <div className="App">
      <Formik
        enableReinitialize
        initialValues={{
          imei: '',
          idCompany: ''
        }}
        validationSchema={Yup.object().shape({
          imei: Yup.string().required("required"),
          idCompany: Yup.string().required("required"),
        })}
        onSubmit={async (values) => {
          postImei(values);
        }}
      >
        {({
          errors,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
  <form>
    <div className="headText">
            <div><p>Verificación de Imei</p></div>
            
          </div>
          <TextField
            error={Boolean(touched.imei && errors.imei)}
            helperText={touched.imei ? errors.imei : ""}
            className="textField inputGeneral"
            id="imei"
            label="imei"
            type="text"
            onChange={handleChange}
            value={values.imei}
            inputProps={{ maxLength: 50 }}
          />
          <TextField
            error={Boolean(touched.idCompany && errors.idCompany)}
            helperText={touched.idCompany ? errors.idCompany : ""}
            className="textField inputGeneral"
            id="idCompany"
            label="idCompany"
            type="text"
            onChange={handleChange}
            value={values.idCompany}
            inputProps={{ maxLength: 50 }}
          />
          <div className="contentButtonAccept">
            <Button
              className="mainButton buttonOne"
              onClick={() => handleSubmit()}
              variant="contained"
            >
              Verificar
            </Button>
          </div>
  </form>
)}
      </Formik>
    </div>
  );
}

export default App;
