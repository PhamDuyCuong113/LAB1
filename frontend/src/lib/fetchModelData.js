function fetchModel(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://cxh6ds-8081.csb.app/api${url}`);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve({ data: JSON.parse(xhr.responseText) });
      } else {
        reject({ status: xhr.status, statusText: xhr.statusText });
      }
    };
  });
}
export default fetchModel;