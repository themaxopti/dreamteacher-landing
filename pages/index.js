import { Feedback } from "../components/Feedback";
import { FirstPage } from "../components/FirstPage";
import { Form } from "../components/Form";
import { SecondPage } from "../components/SecondPage";

export default function Home() {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <Feedback/>
      <Form/>
    </>
  )
}
