import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <Container variant="flex">
      <Typography variant="h1">Ooooops...</Typography>
      <Typography variant="h2">That page cannot be found.</Typography>
      <Typography variant="body1">
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
