// // ./ui/sticky-scroll-reveal.tsx
// "use client";

// import React from "react";

// type ContentItem = {
//   title: string;
//   description: string;
//   content: React.ReactNode;
//   url?: string;
// };

// export function StickyScroll({ content }: { content: ContentItem[] }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {content.map((item, idx) => (
//         <div
//           key={idx}
//           className="border rounded-lg p-6 shadow-md bg-white dark:bg-zinc-900"
//         >
//           <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//             {item.description}
//           </p>
//           <div className="h-32">{item.content}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
