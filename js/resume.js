window.onload = async () => {
  const { jsPDF } = window.jspdf;

  window.generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Set base font and heading color
    const headingColor = [42, 42, 114]; // Royal Blue
    doc.setFont("helvetica", "normal");

    // Title
    doc.setFontSize(22);
    doc.setTextColor(...headingColor);
    doc.text("Resume", 105, 20, null, null, "center");

    // Get form values
    const clean = (text) => text.replace(/[^\x00-\x7F]/g, "");

    const name = clean(document.getElementById("name").value);
    const email = clean(document.getElementById("email").value);
    const phone = clean(document.getElementById("phone").value);
    const college = clean(document.getElementById("college").value);
    const cgpa = clean(document.getElementById("cgpa").value);
    const tenth = clean(document.getElementById("tenth").value);
    const twelfth = clean(document.getElementById("twelfth").value);
    const skills = clean(document.getElementById("skills").value);
    const projects = clean(document.getElementById("projects").value);

    let y = 35;

    // Contact Info
    doc.setFontSize(14);
    doc.setTextColor(...headingColor);
    doc.text("Contact Information", 10, y);
    y += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, y);
    y += 8;
    doc.text(`Email: ${email}`, 10, y);
    y += 8;
    doc.text(`Phone: ${phone}`, 10, y);

    // Education
    y += 12;
    doc.setTextColor(...headingColor);
    doc.setFontSize(14);
    doc.text("Education", 10, y);
    y += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`College: ${college}`, 10, y);
    y += 8;
    doc.text(`CGPA: ${cgpa}`, 10, y);
    y += 8;
    doc.text(`10th Marks: ${tenth}%`, 10, y);
    y += 8;
    doc.text(`12th Marks: ${twelfth}%`, 10, y);

    // Skills
    y += 12;
    doc.setTextColor(...headingColor);
    doc.setFontSize(14);
    doc.text("Skills", 10, y);
    y += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(skills, 10, y);

    // Projects
    y += 12;
    doc.setTextColor(...headingColor);
    doc.setFontSize(14);
    doc.text("Projects", 10, y);
    y += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    const splitProjects = doc.splitTextToSize(projects, 180);
    doc.text(splitProjects, 10, y);

    // Save file
    doc.save(`${name.replace(/ /g, "_")}_Resume.pdf`);
  };
};
