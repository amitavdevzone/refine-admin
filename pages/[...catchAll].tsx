import { ErrorComponent } from "@refinedev/antd";
import { GetServerSideProps } from "next";

export default function CatchAll() {
  return <ErrorComponent />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
