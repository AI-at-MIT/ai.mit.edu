"use client";
import BackgroundAnimation from "@/components/backgroundanimation";
import FancyLink from "@/components/fancylink";
import Image from "next/image";
import * as Constants from "@/components/util/constants";
import Navbar from '@/components/navbar'
import ExecutiveMembers from '@/components/executivemembers'



import {allExec, InitiativeInterface,ExecData} from '@/components/util/constants'





export default function Home() {

  const yearArray: [string, string, ExecData[]][] = Object.entries(allExec).map(
    ([key, value]): [string, string, ExecData[]] => {
      // Split the key to extract year1 and year2
      const [year1, year2WithExec] = key.split("-");
      const year2 = year2WithExec.split("_")[0]; // Remove the "_exec" part
  
      // Return the array in the format [year1, year2, value]
      return [year1, year2, value];
    }
  );
  
  // Sort the array by year2
  yearArray.sort((a, b) => parseInt(a[1], 10) - parseInt(b[1], 10)).reverse();



  return (
    <main>
      <Navbar />
      <div className="section">
        <h1>Past Exec</h1>
        <div className="max-w-[600px] w-auto text-left mx-auto">
          <p className="gray-text">
              {`While the organization was founded in 2017, we only show executive members of AI@MIT going back to 2023. If you're involved feel free to reach out to these recent alumni to learn more.`}

          </p>
        </div>
        <div className="w-64 mt-12 z-100">
          <a href="./">
            <Image
              alt="aim-logo-full"
              src="/icons/aim-icon-full.svg"
              layout="responsive"
              width={100}
              height={100}
              quality={100}
              className="transition duration-100 hover:opacity-50 active:scale-95"
            />
          </a>
        </div>
      </div>
      
      {yearArray.map(([year1, year2, data], index) => (
        <ExecutiveMembers
          key={index} // Use a unique key in a real application, such as a combination of years or an ID from data
          title={`Exec from ${year1}-${year2}`}
          initiative={Constants.initiative_data.aim} // Assuming initiative_data.aim is the correct path
          exec_data={data}
        />
      ))}
    </main>
  );
}
