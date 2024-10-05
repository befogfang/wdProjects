// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const previewName = document.getElementById('previewName');
    const previewEmail = document.getElementById('previewEmail');
    const previewPhone = document.getElementById('previewPhone');
    const previewSummary = document.getElementById('previewSummary');
    const previewExperience = document.getElementById('previewExperience');
    const previewEducation = document.getElementById('previewEducation');
    const previewSkills = document.getElementById('previewSkills');

    form.addEventListener('input', function() {
        previewName.textContent = form.name.value;
        previewEmail.textContent = form.email.value;
        previewPhone.textContent = form.phone.value;
        previewSummary.textContent = form.summary.value;
        previewExperience.textContent = form.experience.value;
        previewEducation.textContent = form.education.value;
        previewSkills.textContent = form.skills.value;
    });
});
