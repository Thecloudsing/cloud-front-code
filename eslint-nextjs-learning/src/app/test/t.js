// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("ok");
//       // throw new Error("fff");
//       reject("error");
//     }, 1000);
//   });
// }
//
// // console.log(b());
// async function a() {
//   try {
//     const h = await b();
//     console.log("h => ", h);
//     return h;
//   } catch (e) {
//     console.log("e => ", e);
//     return e;
//   }
// }
//
// (async () => {
//   const f = await a();
//   console.log(" f=> ", f);
//   // const w = await b();
//   // console.log(" w=> ", w);
// })();
// const url = new URL("https://example.org/");
// console.log("protocol => ", url);
//
// const all = Promise.all([
//   3,
//   "1",
//   (async () => {
//     throw new Error("0000");
//   })(),
//   0x22,
// ]);
// all.catch((e) => {
//   console.log(e);
// });
// function getAllCommonSubstrings(str1, str2) {
//   const dp = Array(str1.length + 1)
//     .fill(0)
//     .map(() => Array(str2.length + 1).fill(0));
//   const commonSubstrings = [];
//
//   for (let i = 1; i <= str1.length; i++) {
//     for (let j = 1; j <= str2.length; j++) {
//       if (str1[i - 1] === str2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//         if (dp[i][j] > 1) {
//           const substring = str1.slice(i - dp[i][j], i);
//           // 只有当新的子串长度大于已有子串长度时，才添加到数组中
//           if (!commonSubstrings.some((str) => str.includes(substring))) {
//             commonSubstrings.push(substring);
//           }
//         }
//       }
//     }
//   }
//
//   // 过滤掉被其他更长的子串包含的子串
//   const longestSubstrings = commonSubstrings.filter((str1, index, self) =>
//     self.every(
//       (str2, otherIndex) => index === otherIndex || !str2.includes(str1),
//     ),
//   );
//
//   return longestSubstrings;
// }

// eslint-disable-next-line camelcase
const py_a = `
EUWT4EE9X2-eyJsaWNlbnNlSWQiOiJFVVdUNEVFOVgyIiwibGljZW5zZWVOYW1lIjoic2lnbnVwIHNjb290ZXIiLCJhc3NpZ25lZU5hbWUiOiIiLCJhc3NpZ25lZUVtYWlsIjoiIiwibGljZW5zZVJlc3RyaWN0aW9uIjoiIiwiY2hlY2tDb25jdXJyZW50VXNlIjpmYWxzZSwicHJvZHVjdHMiOlt7ImNvZGUiOiJQU0kiLCJmYWxsYmFja0RhdGUiOiIyMDI1LTA4LTAxIiwicGFpZFVwVG8iOiIyMDI1LTA4LTAxIiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBDIiwiZmFsbGJhY2tEYXRlIjoiMjAyNS0wOC0wMSIsInBhaWRVcFRvIjoiMjAyNS0wOC0wMSIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUFBDIiwiZmFsbGJhY2tEYXRlIjoiMjAyNS0wOC0wMSIsInBhaWRVcFRvIjoiMjAyNS0wOC0wMSIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQV1MiLCJmYWxsYmFja0RhdGUiOiIyMDI1LTA4LTAxIiwicGFpZFVwVG8iOiIyMDI1LTA4LTAxIiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBDV01QIiwiZmFsbGJhY2tEYXRlIjoiMjAyNS0wOC0wMSIsInBhaWRVcFRvIjoiMjAyNS0wOC0wMSIsImV4dGVuZGVkIjp0cnVlfV0sIm1ldGFkYXRhIjoiMDEyMDIyMDkwMlBTQU4wMDAwMDUiLCJoYXNoIjoiVFJJQUw6MzUzOTQ0NTE3IiwiZ3JhY2VQZXJpb2REYXlzIjo3LCJhdXRvUHJvbG9uZ2F0ZWQiOmZhbHNlLCJpc0F1dG9Qcm9sb25nYXRlZCI6ZmFsc2V9-FT9l1nyyF9EyNmlelrLP9rGtugZ6sEs3CkYIKqGgSi608LIamge623nLLjI8f6O4EdbCfjJcPXLxklUe1O/5ASO3JnbPFUBYUEebCWZPgPfIdjw7hfA1PsGUdw1SBvh4BEWCMVVJWVtc9ktE+gQ8ldugYjXs0s34xaWjjfolJn2V4f4lnnCv0pikF7Ig/Bsyd/8bsySBJ54Uy9dkEsBUFJzqYSfR7Z/xsrACGFgq96ZsifnAnnOvfGbRX8Q8IIu0zDbNh7smxOwrz2odmL72UaU51A5YaOcPSXRM9uyqCnSp/ENLzkQa/B9RNO+VA7kCsj3MlJWJp5Sotn5spyV+gA==-MIIETDCCAjSgAwIBAgIBDTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIwMTAxOTA5MDU1M1oXDTIyMTAyMTA5MDU1M1owHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMDEwMTkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCUlaUFc1wf+CfY9wzFWEL2euKQ5nswqb57V8QZG7d7RoR6rwYUIXseTOAFq210oMEe++LCjzKDuqwDfsyhgDNTgZBPAaC4vUU2oy+XR+Fq8nBixWIsH668HeOnRK6RRhsr0rJzRB95aZ3EAPzBuQ2qPaNGm17pAX0Rd6MPRgjp75IWwI9eA6aMEdPQEVN7uyOtM5zSsjoj79Lbu1fjShOnQZuJcsV8tqnayeFkNzv2LTOlofU/Tbx502Ro073gGjoeRzNvrynAP03pL486P3KCAyiNPhDs2z8/COMrxRlZW5mfzo0xsK0dQGNH3UoG/9RVwHG4eS8LFpMTR9oetHZBAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQUJNoRIpb1hUHAk0foMSNM9MCEAv8wSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBABqRoNGxAQct9dQUFK8xqhiZaYPd30TlmCmSAaGJ0eBpvkVeqA2jGYhAQRqFiAlFC63JKvWvRZO1iRuWCEfUMkdqQ9VQPXziE/BlsOIgrL6RlJfuFcEZ8TK3syIfIGQZNCxYhLLUuet2HE6LJYPQ5c0jH4kDooRpcVZ4rBxNwddpctUO2te9UU5/FjhioZQsPvd92qOTsV+8Cyl2fvNhNKD1Uu9ff5AkVIQn4JU23ozdB/R5oUlebwaTE6WZNBs+TA/qPj+5/we9NH71WRB0hqUoLI2AKKyiPw++FtN4Su1vsdDlrAzDj9ILjpjJKA1ImuVcG329/WTYIKysZ1CWK3zATg9BeCUPAV1pQy8ToXOq+RSYen6winZ2OO93eyHv2Iw5kbn1dqfBw1BuTE29V2FJKicJSu8iEOpfoafwJISXmz1wnnWL3V/0NxTulfWsXugOoLfv0ZIBP1xH9kmf22jjQ2JiHhQZP7ZDsreRrOeIQ/c4yR8IQvMLfC0WKQqrHu5ZzXTH4NO3CwGWSlTY74kE91zXB5mwWAx1jig+UXYc2w4RkVhy0//lOmVya/PEepuuTTI4+UJwC7qbVlh5zfhj8oTNUXgN0AOc+Q0/WFPl1aw5VV/VrO8FCoB15lFVlpKaQ1Yh+DVU8ke+rt9Th0BCHXe0uZOEmH0nOnH/0onD
`;
// eslint-disable-next-line camelcase
const py_b = `
T7USULHBNF-eyJsaWNlbnNlSWQiOiJUN1VTVUxIQk5GIiwibGljZW5zZWVOYW1lIjoiZ3VyZ2xlcyB0dW1ibGVzIiwiYXNzaWduZWVOYW1lIjoiIiwiYXNzaWduZWVFbWFpbCI6IiIsImxpY2Vuc2VSZXN0cmljdGlvbiI6IiIsImNoZWNrQ29uY3VycmVudFVzZSI6ZmFsc2UsInByb2R1Y3RzIjpbeyJjb2RlIjoiUENXTVAiLCJmYWxsYmFja0RhdGUiOiIyMDI2LTA5LTE0IiwicGFpZFVwVG8iOiIyMDI2LTA5LTE0IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBDIiwiZmFsbGJhY2tEYXRlIjoiMjAyNi0wOS0xNCIsInBhaWRVcFRvIjoiMjAyNi0wOS0xNCIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUFNJIiwiZmFsbGJhY2tEYXRlIjoiMjAyNi0wOS0xNCIsInBhaWRVcFRvIjoiMjAyNi0wOS0xNCIsImV4dGVuZGVkIjp0cnVlfV0sIm1ldGFkYXRhIjoiMDEyMDIzMDkxNFBTQVgwMDAwMDUiLCJoYXNoIjoiVFJJQUw6NzM4MzY4NjQ0IiwiZ3JhY2VQZXJpb2REYXlzIjo3LCJhdXRvUHJvbG9uZ2F0ZWQiOmZhbHNlLCJpc0F1dG9Qcm9sb25nYXRlZCI6ZmFsc2V9-cjtPn2BDgvquYqMu8jD//otufahQs2q1uOxdPwcb0JAeMRa3dIeZ6u8FJd2L3VFU2Qc4187i7SwjPVh5Xx/D0in47mPvPqxp2lPtaBOYaVUKRrudBf+9WC49Ggw9SyKgx2XkGF429ZHD6OSAQnzy6RxlJNc0IHS3p2B9u9aYc5vLkOYEluUBjdctPDbrhWQmuAd/1qMj/LRGZzdOcCHIems7igEjJvaDH9zukxMrTYCtya63uivmRFCqG7frptThq4UI9HhAWfEIkFbJDoneU/6MGRR+4mDL+wEuetnZ1oPgGFkTpQs/OQLjXDKQgqpaD+hu5bmyZhpaaWgrHhR1Ig==-MIIETDCCAjSgAwIBAgIBDTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIwMTAxOTA5MDU1M1oXDTIyMTAyMTA5MDU1M1owHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMDEwMTkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCUlaUFc1wf+CfY9wzFWEL2euKQ5nswqb57V8QZG7d7RoR6rwYUIXseTOAFq210oMEe++LCjzKDuqwDfsyhgDNTgZBPAaC4vUU2oy+XR+Fq8nBixWIsH668HeOnRK6RRhsr0rJzRB95aZ3EAPzBuQ2qPaNGm17pAX0Rd6MPRgjp75IWwI9eA6aMEdPQEVN7uyOtM5zSsjoj79Lbu1fjShOnQZuJcsV8tqnayeFkNzv2LTOlofU/Tbx502Ro073gGjoeRzNvrynAP03pL486P3KCAyiNPhDs2z8/COMrxRlZW5mfzo0xsK0dQGNH3UoG/9RVwHG4eS8LFpMTR9oetHZBAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQUJNoRIpb1hUHAk0foMSNM9MCEAv8wSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBABKaDfYJk51mtYwUFK8xqhiZaYPd30TlmCmSAaGJ0eBpvkVeqA2jGYhAQRqFiAlFC63JKvWvRZO1iRuWCEfUMkdqQ9VQPXziE/BlsOIgrL6RlJfuFcEZ8TK3syIfIGQZNCxYhLLUuet2HE6LJYPQ5c0jH4kDooRpcVZ4rBxNwddpctUO2te9UU5/FjhioZQsPvd92qOTsV+8Cyl2fvNhNKD1Uu9ff5AkVIQn4JU23ozdB/R5oUlebwaTE6WZNBs+TA/qPj+5/we9NH71WRB0hqUoLI2AKKyiPw++FtN4Su1vsdDlrAzDj9ILjpjJKA1ImuVcG329/WTYIKysZ1CWK3zATg9BeCUPAV1pQy8ToXOq+RSYen6winZ2OO93eyHv2Iw5kbn1dqfBw1BuTE29V2FJKicJSu8iEOpfoafwJISXmz1wnnWL3V/0NxTulfWsXugOoLfv0ZIBP1xH9kmf22jjQ2JiHhQZP7ZDsreRrOeIQ/c4yR8IQvMLfC0WKQqrHu5ZzXTH4NO3CwGWSlTY74kE91zXB5mwWAx1jig+UXYc2w4RkVhy0//lOmVya/PEepuuTTI4+UJwC7qbVlh5zfhj8oTNUXgN0AOc+Q0/WFPl1aw5VV/VrO8FCoB15lFVlpKaQ1Yh+DVU8ke+rt9Th0BCHXe0uZOEmH0nOnH/0onD
`;
// const t = getAllCommonSubstrings(py_a, py_b);
// console.log(t.filter((value) => value.length > 50));
// console.log(t);

const splitText = (text, maxLength) => {
  let textArr = [];
  let line = "";
  let lineLength = 0;
  let dIndex = -1;
  let gIndex = -1;
  let flag = false;
  let relativeIndex = 0;
  text.split("").forEach((char, index) => {
    lineLength += 1;
    line += char;

    if (char === "，" || char === ",") {
      dIndex = relativeIndex;
    }
    if (char === "。" || char === ".") {
      gIndex = relativeIndex;
    }
    if (lineLength >= maxLength) {
      flag = true;
    }
    if (flag && gIndex !== -1) {
      textArr.push(line.substring(0, gIndex + 1));
      line = line.substring(gIndex + 1);
      lineLength = line.length;
      relativeIndex -= gIndex + 1;
      flag = false;
      gIndex = -1;
      if (gIndex > dIndex) {
        dIndex = -1;
      } else {
        dIndex -= gIndex + 1;
      }
    }
    if (flag && dIndex !== -1) {
      textArr.push(line.substring(0, dIndex + 1));
      line = line.substring(dIndex + 1);
      lineLength = line.length;
      relativeIndex -= dIndex + 1;
      flag = false;
      dIndex = -1;
    }
    if (text.length - 1 === index) {
      line && textArr.push(line);
    }
    relativeIndex++;
  });
  return textArr;
};

// console.log(splitText("披罗衣之璀粲兮，珥瑶碧之华琚。", Math.ceil(380/24)));

function isDayOrNight(timezone) {
  // Get current date and time
  const now = new Date();

  // Convert to specified timezone
  const options = { timeZone: timezone, hour: "2-digit", hour12: false };
  const timeInTimezone = now.toLocaleString("en-US", options);

  // Get the hour in 24-hour format
  const hour = timeInTimezone;
  console.log(timeInTimezone);
  // Define sunrise and sunset hours (simplified)
  const sunrise = 6; // 6 AM
  const sunset = 18; // 6 PM

  // Determine if it's day or night
  if (hour >= sunrise && hour < sunset) {
    return "Day";
  } else {
    return "Night";
  }
}

console.log(isDayOrNight("Asia/Shanghai"));

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone); // Outputs: 'America/New_York' (or whatever your system's timezone is)
