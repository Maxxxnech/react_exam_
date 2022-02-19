//API для запросов к issues: https://docs.github.com/en/rest/reference/issues

const owner = "Maxxxnech";
const repo = "react_exam_";
const myUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;


const auth = {
    //Base64-encoded ASCII string from a binary string 
  //Authorization: "Basic " + btoa(`${owner}:${password}`),
  Authorization: "Basic " + 'TWF4eHhuZWNoOmdocF82UTFVaEJKSlZPRU9MZjl4OWMxZXYzRG5ZWWRVb1IzRGY0R24='
};

export function loadIssues(cbk) {

  fetch(myUrl + `?state=all`, {
    cache: "no-store",
    method: "GET",
    headers: {
        ...auth,
      },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(`Got data from ${myUrl} ${JSON.stringify(data)}`);
      //async
      cbk && cbk(data);
    });
}

export function updateIssues(state, issue_number, cbk) {
  const issueUrl = myUrl + "/" + issue_number;
  let myTimeout = null;
  fetch(issueUrl, {
    cache: "no-store",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...auth,
    },
    body: JSON.stringify({
      owner: `${owner}`,
      repo: `${repo}`,
      issue_number: issue_number,
      state: state,
    }),
  })
    .then((result) => result.json())
    .then((data) => {

      if(cbk) {
        clearTimeout(myTimeout);
        myTimeout = setTimeout(()=>cbk(data), 1000);
      }
    });
}

