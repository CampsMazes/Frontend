import React, { useState } from 'react';
import text from "./text";
const TabCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Overview', content: text() },
    { label: 'Education', content: text() },
    { label: 'Expertise', content: text() },
    { label: 'Year Experience', content: text() },
  ];

  return (
    <div className="text-dark2">
      <div className="mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg">
          <div className="flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab
                    ? 'bg-secondary  text-white'
                    : 'border shadow text-gray-700'
                } flex-1 text-center py-4 px-1 rounded-tl-lg rounded-tr-lg`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-4">
            <p>{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;




// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
//   } from "@material-tailwind/react";
   
//   export default function CardTab() {
//     const data = [
//       {
//         label: "HTML",
//         value: "html",
//         desc: `It really matters and then like it really doesn't matter.
//         What matters is the people who are sparked by it. And the people 
//         who are like offended by it, it doesn't matter.`,
//       },
//       {
//         label: "React",
//         value: "react",
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },
//       {
//         label: "Vue",
//         value: "vue",
//         desc: `We're not always in the position that we want to be at.
//         We're constantly growing. We're constantly making mistakes. We're
//         constantly trying to express ourselves and actualize our dreams.`,
//       },
//       {
//         label: "Angular",
//         value: "angular",
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },
//       {
//         label: "Svelte",
//         value: "svelte",
//         desc: `We're not always in the position that we want to be at.
//         We're constantly growing. We're constantly making mistakes. We're
//         constantly trying to express ourselves and actualize our dreams.`,
//       },
//     ];
   
//     return (
//       <Tabs value="html">
//         <TabsHeader>
//           {data.map(({ label, value }) => (
//             <Tab key={value} value={value}>
//               {label}
//             </Tab>
//           ))}
//         </TabsHeader>
//         <TabsBody>
//           {data.map(({ value, desc }) => (
//             <TabPanel key={value} value={value}>
//               {desc}
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </Tabs>
//     );
//   }