import React, { useContext } from "react";

import Box from "@mui/material/Box";
import { useParams } from "react-router";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { AuthContext } from "../handlers/AuthHandler";

export const Login = () => {
  const { id: paramsUserId } = useParams();
  const { loginUserWithId } = useContext(AuthContext);

  const handleLogin = async ({ password }) => {
    await loginUserWithId(paramsUserId, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        flexDirection: "column",
      }}
    >
      <LoginForm onSubmit={handleLogin} withUsername={!paramsUserId} />
    </Box>
  );
};

export default Login;
