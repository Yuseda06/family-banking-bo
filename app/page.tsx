import Image from "next/image";
import Link from "next/link";
import { initializeApp } from "firebase/app";

export default function Home() {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABWF_bVBGS7S8vDZkWYYvxeKbg9oWItr8",
    authDomain: "familybankingbykmy.firebaseapp.com",
    projectId: "familybankingbykmy",
    storageBucket: "familybankingbykmy.appspot.com",
    messagingSenderId: "595549353243",
    appId: "1:595549353243:web:b000c6cadbfcd7d070cfbe",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col gap-20 font-mono text-sm lg:flex">
        <div className="container mx-auto  ">
          <div className="flex items-center justify-center">
            <Image src="/icon.png" alt="test" height={200} width={200} />
          </div>

          <h1 className="text-2xl font-bold text-center">
            Welcome to Family Banking BOYO
          </h1>

          <div className="container mx-auto p-4 text-xl items-center justify-center flex-row  mt-20 text-center ">
            <p className="mb-4">
              Explore our services and manage your account with ease:
            </p>

            <div className="list-disc ml-6 mb-6 items-center justify-center  ">
              <div className="text-blue-500">
                <Link href="/accountDeletion">
                  {" "}
                  <span style={{ marginRight: "5px", color: "red" }}>
                    ➡️
                  </span>{" "}
                  Account Deletion
                </Link>
              </div>

              <div className="text-blue-500">
                <Link href="/privacyPolicy">
                  <span style={{ marginRight: "5px", color: "red" }}>➡️</span>{" "}
                  Privacy Policy
                </Link>
              </div>
            </div>

            <p>
              For any questions or concerns, please contact our support team at{" "}
              <a href="mailto:yusryku@gmail.com" className="text-blue-500">
                yusryku@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
