function analysisSubmit() {
    const websiteURL = document.getElementById('search').elements['address'].value;
    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    if (urlPattern.test(websiteURL)) {
        alert('Your URL is successfully submitted.');
        window.location.href = '/analysis.html';
        document.getElementById('search').reset();
        return false;
    } else {
        alert('Invalid URL. Please enter a valid website URL.');
        return false;
    }
}

const analysisData = () => {

    const { value: name } = document.getElementById("name");
    const { value: number } = document.getElementById("number");
    const { value: email } = document.getElementById("email");
    const { value: smm } = document.getElementById("smm");
    const { value: website } = document.getElementById("websites");
    const { value: message } = document.getElementById("message");

    console.log(`Name: ${name}`);
    console.log(`Contact No: ${number}`);
    console.log(`Email: ${email}`);
    console.log(`Social Media Handle Link: ${smm}`);
    console.log(`Website: ${website}`);
    console.log(`Message: ${message}`);


    alert("Your data is successfully submitted!");

    
    document.getElementById("analysisform").reset();

    
    return false;
};