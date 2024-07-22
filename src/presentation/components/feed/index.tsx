import { Form } from "@/presentation/components/form";
import { SecondaryButton } from "@/presentation/components/ui/button";
import Tweet from "../tweet";

export function Feed(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <Tweet pinned date="20 feb 2023">
          <p>
            Hello there! My name is Benjamin Henley Saubidet and welcome to my
            developer page. I'm a full-stack JavaScript developer with 3 years
            of experience. I've done full-stack, backend, and frontend jobs. I'm
            very passionate about my craft. Currently, I'm also studying React
            Native for mobile app development.
          </p>
        </Tweet>

        <Tweet date="20 feb 2023">
          <p>
            I have been a freelance developer for 3 years, and i'm currently
            looking to join a developer team.
          </p>
        </Tweet>

        <Tweet date="13 feb 2023">
          📚 EDUCATION 📚
          <br></br>
          <br></br>
          <p>
            School: St. Matthews College (2006-2018)<br></br>
            School: University of Buenos Aires (Biochemistry) (2018-2020)
            <br></br>
            Terciary: APX School (2021-2023) <br></br>
            Terciary: Udemy - Next.js: The React framework for production
            (03/2024 - 06/2024) <br></br>
            Terciary: Udemy - React Native: Native applications for IOS and
            Android(06/2024 - now) <br></br>
          </p>
        </Tweet>

        {/* <Tweet date="13 feb 2023">
          <p>

          </p>
        </Tweet> */}

        <Tweet date="26 jan 2023">
          <p>
            If you would like to get in contact with me, please fill out the
            form below!
          </p>
          <Form></Form>
        </Tweet>
      </div>
    </div>
  );
}
