import React, { useEffect, useState } from 'react';
import '../App.css'; // Ensure this line is added at the top of your App.js

const About = () => {
  const [binaryFace, setBinaryFace] = useState('');

  // Generate the binary face with random numbers
  const generateBinaryFace = () => {
    return `
${generateRandomBinaryLine()}
${generateRandomBinaryLine()}
${generateRandomBinaryLineWithFace('   _______   ')}
${generateRandomBinaryLineWithFace('  /       \\  ')}
${generateRandomBinaryLineWithFace(' | (.) (.) | ')}
${generateRandomBinaryLineWithFace('  \\   ^   /  ')}
${generateRandomBinaryLineWithFace('   \\ ___ /   ')}
${generateRandomBinaryLineWithFace('    |||||    ')}
${generateRandomBinaryLineWithFace('    |||||    ')}
${generateRandomBinaryLine()}
${generateRandomBinaryLine()}
${generateRandomBinaryLine()}
${generateRandomBinaryLine()}
    `.trim();
  };

  // Generate a random binary line
  const generateRandomBinaryLine = () => {
    return Array(40)
      .fill(null)
      .map(() => (Math.random() < 0.5 ? '1' : '0'))
      .join('');
  };

  // Generate a binary line with a specific section replaced
  const generateRandomBinaryLineWithFace = (faceContent) => {
    const line = generateRandomBinaryLine();
    const start = Math.floor((line.length - faceContent.length) / 2);
    return (
      line.slice(0, start) + faceContent + line.slice(start + faceContent.length)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryFace(generateBinaryFace());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="content-left">
        <h2>About Me</h2>
    <p className="rem2">
  I am a Computer Science graduate with strong experience in web development, specializing in technologies such as Laravel, React, and WordPress. I have successfully developed and deployed several web applications, including projects that integrate complex backend APIs, dynamic frontend interfaces, and user-centric designs. I am passionate about building high-quality, scalable, and efficient web solutions that deliver value to clients.
</p>

      </div>
      <div className="number-face">
        <pre>{binaryFace}</pre>
      </div>
    </section>
  );
};

export default About;
