async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const college = document.getElementById('college').value;
  const cgpa = document.getElementById('cgpa').value;
  const tenth = document.getElementById('tenth').value;
  const twelfth = document.getElementById('twelfth').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;

  doc.setFontSize(20);
  doc.text("Resume", 105, 20, null, null, 'center');

  doc.setFontSize(12);
  doc.text(`Name: ${name}`, 10, 40);
  doc.text(`Email: ${email}`, 10, 50);
  doc.text(`Phone: ${phone}`, 10, 60);

  doc.text("Education:", 10, 75);
  doc.text(`College: ${college}`, 20, 85);
  doc.text(`CGPA: ${cgpa}`, 20, 95);
  doc.text(`10th: ${tenth}%`, 20, 105);
  doc.text(`12th: ${twelfth}%`, 20, 115);

  doc.text("Skills:", 10, 130);
  doc.text(skills, 20, 140);

  doc.text("Projects:", 10, 160);
  doc.text(projects, 20, 170);

  doc.save(`${name.replace(" ", "_")}_Resume.pdf`);
}
