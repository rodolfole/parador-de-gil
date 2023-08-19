import emailjs from "emailjs-com";
import { Form, Formik } from "formik";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as Yup from "yup";

import data from "../data.json";
import Input from "./FormUI/Input";
import { FadeBox, Parallax } from "../styles/global";

const { contact_info, ubication } = data;

const Contact = () => {
  const INITIAL_VALUES = {
    email: "",
    message: "",
    name: "",
  };

  return (
    <Parallax
      bg={`${process.env.REACT_APP_URI}/assets/img/food/8.png`}
      id="contact"
      sx={{
        height: {
          xs: "calc(100vh + 120px)",
          sm: "100vh",
          md: "650px",
          marginBottom: { xs: "100px" },
        },
      }}
    >
      <FadeBox
        a={6}
        display="flex"
        sx={{
          flexDirection: { sm: "column" },
          height: { xs: "calc(100vh + 120px)", sm: "100vh", md: "650px" },
          padding: { xs: "60px 30px" },
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexDirection: { sm: "column", md: "row" } }}
          columns={{ xs: 12, sm: 10 }}
        >
          <Grid
            flexDirection="column"
            item
            justifyContent="space-evenly"
            sm={4}
            xs={12}
          >
            <Typography color="primary" variant="h4">
              Contactanos
            </Typography>
            <Box className="_df _aic" sx={{ color: "white" }} py={2}>
              <Avatar sx={{ bgcolor: "white", width: 70, height: 70, mr: 3 }}>
                <i
                  className="fa-solid fa-phone fa-2x"
                  style={{ color: "#f5b800" }}
                ></i>
              </Avatar>
              <Typography
                sx={{ fontWeight: "bold", fontSize: { md: 20, xs: 16 } }}
              >
                {contact_info.phone}
              </Typography>
            </Box>

            <Box className="_df _aic" sx={{ color: "white" }} py={2}>
              <Avatar sx={{ bgcolor: "white", width: 70, height: 70, mr: 3 }}>
                <i
                  className="fa-solid fa-envelope fa-2x"
                  style={{ color: "#f5b800" }}
                ></i>
              </Avatar>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: 20, xs: 16 },
                  wordBreak: { xs: "break-all" },
                }}
              >
                {contact_info.email}
              </Typography>
            </Box>
            <Box className="_df _aic" sx={{ color: "white" }} py={2}>
              <Avatar sx={{ bgcolor: "white", width: 70, height: 70, mr: 3 }}>
                <i
                  style={{ color: "#f5b800" }}
                  className="fa-solid fa-location-dot fa-2x"
                ></i>
              </Avatar>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: { md: 20, xs: 16 } }}
                >
                  {ubication.info.address}, <br /> Col.{ubication.info.colony}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: { md: 20, xs: 16 } }}
                >
                  {ubication.info.town},{ubication.info.state}, México CP.
                  {ubication.info.postal_code}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            item
            p={3}
            sx={{
              background: "white",
              borderRadius: 2,
            }}
            sm={6}
            xs={12}
          >
            <Formik
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Email no valido")
                  .min(8, "Debes ingresar al menos 8 letras")
                  .required("El email es requerido"),
                message: Yup.string()
                  .min(8, "Debes ingresar al menos 8 letras")
                  .required("El mensaje es requerido"),
                name: Yup.string().required("El nombre es requerido"),
              })}
              initialValues={INITIAL_VALUES}
              onSubmit={async (values, { resetForm }) => {
                emailjs
                  .send(
                    process.env.REACT_APP_EMAILJS_SERVICEID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATEID!,
                    values,
                    process.env.REACT_APP_EMAILJS_USERID
                  )
                  .then(
                    function (resp) {
                      resetForm();
                      // console.log("SUCCESS!", response.status, response.text);
                    },
                    function (err) {
                      // console.log("FAILED...", err);
                    }
                  );
              }}
            >
              {({ isSubmitting, isValidating }) => (
                <Form
                  autoComplete="off"
                  className={`_df _fdc `}
                  style={{ flexGrow: 1, gap: 30 }}
                >
                  <Input label="Nombre" name="name" />
                  <Input label="Email" name="email" type="email" />
                  <Input label="Mensaje" minRows={3} multiline name="message" />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || isValidating}
                    style={{
                      alignSelf: "center",
                      color: "#fff",
                      marginBottom: "15px",
                      minWidth: "150px",
                      maxWidth: "150px",
                    }}
                  >
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </FadeBox>
    </Parallax>
  );
};

export default Contact;
