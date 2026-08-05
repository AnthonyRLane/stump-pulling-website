const message = `Hi! I'd like a stump pulling quote.\n\nName:\nCity:\nNumber of stumps:\nApprox. stump widths:\nNarrowest gate/access width:\nI have photos ready: Yes / No`;
const smsHref = `sms:+12065494123?&body=${encodeURIComponent(message)}`;

document.querySelectorAll('.sms-link').forEach((link) => {
  link.href = smsHref;
  link.setAttribute('aria-label', 'Text (206) 549-4123 for a quote');
});

document.getElementById('year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));
}
