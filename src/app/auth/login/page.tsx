"use client";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import ErrorM from "@/components/formik/ErrorM";
import { Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthError, CredentialsSignin } from "next-auth";


export type FormValues = Record<string, any>;

export interface keyValue 
{
    key : string
}

const LoginPage = () => {

   


  const InitialValues = {
    email: "",
    password: "",
  };

  type InitVType = typeof InitialValues;
  const HandleSubmit = (
    values: InitVType,
    { setSubmitting, resetForm , ...props }: FormikHelpers<InitVType>
  ) => {

    

    axios.post("/api/auth/login", JSON.stringify(values), {
      headers: {
           "Content-Type": "application/json",
          },
    })
     .then((res)=> {
      console.log(res);
    })
    .catch((er)=> {
       const Err = er as AxiosError;
       if(Err.response)
       {
           if(Err.response.status == 403)
           {
            const errors = Err.response.data as InitVType;
            console.log(errors)
              for(const er in errors)
              {
                props.setFieldError(er,errors[er as keyof InitVType])
              }
           }
       }else {

       }
    })
    .finally(()=> {
      setSubmitting(false);
    });

    // axios("/api/auth/login", {
    //   method: "post",
    //   data: JSON.stringify(values),
    //   headers: {
    //     "Content-Type": "maltipart/form-data",
    //   },
    // })
    // .then((res)=> {
    //   console.log(res);
    // })
    // .catch((er)=> {
    //   console.log(er);
    // })
    // .finally(()=> {
    //   setSubmitting(false);
    // });
  };


  const ValiScheme = Yup.object({
    email: Yup.string()
      .required("Email Address is required")
      .email("Provile valid Email address"),

    password: Yup.string()
      .required("Password is required")
      .max(20, "Password too long .."),
  });

  return (
    <div className="container">
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Formik
            // validationSchema={ValiScheme}
            initialValues={InitialValues}
            onSubmit={HandleSubmit}
          >
            {(formik: FormikProps<InitVType>) => {
              return (
                <Form className="vstack gap-2 col-lg-4">
                  <section>
                    <label className="form-label">Email Address</label>
                    <Field name="email" className="form-control" />
                    <ErrorMessage name="email" component={ErrorM} />
                  </section>

                  <section>
                    <label className="form-label">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage name="password" component={ErrorM} />
                  </section>

                  <section>
                    <Button variant="success" type="submit">
                      {formik.isSubmitting ? (
                        <section>
                          please wait ...{" "}
                          <Spinner
                            animation="border"
                            variant="light"
                            role="status"
                            size="sm"
                          />
                        </section>
                      ) : (
                        <section>Login</section>
                      )}
                    </Button>
                  </section>
                </Form>
              );
            }}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
