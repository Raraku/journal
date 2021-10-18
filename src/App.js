import "./styles.css";
import DailyRecord from "./Pages/DailyRecord";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import styled from "styled-components";
import Layout from "./Components/Layout";

dayjs.extend(localizedFormat);

export default function App() {
  return (
    <Layout>
      <DailyRecord />
    </Layout>
  );
}
