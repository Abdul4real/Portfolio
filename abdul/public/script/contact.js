function downloadFile() {
    const fileUrl = '/script/resume.pdf'; 
    const fileName = 'resume.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}