// import { ImageResponse } from "next/og"
// import type { NextRequest } from "next/server"

// export async function POST(request: NextRequest) {
//   try {
//     const { message, timestamp } = await request.json()

//     const formatDate = (timestamp: string) => {
//       return new Date(timestamp).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       })
//     }

//     return new ImageResponse(
//       <div
//         style={{
//           height: "100%",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "white",
//           backgroundImage: "linear-gradient(45deg, #f3e8ff 0%, #fce7f3 100%)",
//           padding: "60px",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "40px",
//           }}
//         >
//           <div
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#7c3aed",
//               marginRight: "12px",
//             }}
//           >
//             💜
//           </div>
//           <div
//             style={{
//               fontSize: "28px",
//               fontWeight: "bold",
//               color: "#374151",
//             }}
//           >
//             Anonymous Message
//           </div>
//         </div>

//         {/* Message Content */}
//         <div
//           style={{
//             backgroundColor: "white",
//             borderRadius: "16px",
//             padding: "40px",
//             boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//             maxWidth: "800px",
//             width: "100%",
//             border: "2px solid #e5e7eb",
//           }}
//         >
//           <div
//             style={{
//               fontSize: "24px",
//               lineHeight: "1.6",
//               color: "#374151",
//               textAlign: "center",
//               fontWeight: "400",
//             }}
//           >
//             "{message}"
//           </div>
//         </div>

//         {/* Footer */}
//         <div
//           style={{
//             marginTop: "40px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           <div
//             style={{
//               fontSize: "16px",
//               color: "#6b7280",
//             }}
//           >
//             Received on {formatDate(timestamp)}
//           </div>
//           <div
//             style={{
//               fontSize: "14px",
//               color: "#9ca3af",
//             }}
//           >
//             Share positivity • anonymous-messages.app
//           </div>
//         </div>
//       </div>,
//       {
//         width: 1200,
//         height: 630,
//       },
//     )
//   } catch (e: any) {
//     console.log(`${e.message}`)
//     return new Response(`Failed to generate the image`, {
//       status: 500,
//     })
//   }
// }
