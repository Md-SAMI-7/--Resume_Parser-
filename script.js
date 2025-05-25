async function parseResume() {
  const fileInput = document.getElementById("resumeFile");
  const outputDiv = document.getElementById("output");

  if (!fileInput.files.length) {
      alert("Please upload a resume file.");
      return;
  }

  const file=fileInput.files[0];
  const formData =new FormData();
  formData.append("file", file);

  outputDiv.innerText= "Uploading and processing file...";

  try {
      const response=await fetch("http://127.0.0.1:5000/parse", {
          method: "POST",
          body: formData,
      });

      if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
      }

      const data =await response.json();
      outputDiv.innerText=data.result;
  } catch (error) {
      outputDiv.innerText ="error: "+ error.message;
  }
}
