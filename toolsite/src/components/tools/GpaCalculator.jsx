'use client';
import { useState } from 'react';

const GRADE_POINTS = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export default function GpaCalculator() {
  const [courses, setCourses] = useState([
    { name: 'Course 1', credits: 3, grade: 'A' },
    { name: 'Course 2', credits: 4, grade: 'B+' },
    { name: 'Course 3', credits: 3, grade: 'A-' }
  ]);
  
  const addCourse = () => {
    setCourses([...courses, { name: `Course ${courses.length + 1}`, credits: 3, grade: 'A' }]);
  };

  const updateCourse = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };
  
  const removeCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  let totalPoints = 0;
  let totalCredits = 0;
  
  courses.forEach(c => {
    totalCredits += parseFloat(c.credits) || 0;
    totalPoints += (parseFloat(c.credits) || 0) * (GRADE_POINTS[c.grade] || 0);
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 100px 100px 50px', gap: '1rem', marginBottom: '1rem', fontWeight: 600 }}>
        <div>Course Name</div>
        <div>Credits</div>
        <div>Grade</div>
        <div></div>
      </div>

      {courses.map((course, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 100px 100px 50px', gap: '1rem', marginBottom: '0.5rem' }}>
          <input type="text" className="input-field" style={{ marginBottom: 0 }} value={course.name} onChange={e => updateCourse(i, 'name', e.target.value)} />
          <input type="number" className="input-field" style={{ marginBottom: 0 }} value={course.credits} onChange={e => updateCourse(i, 'credits', e.target.value)} />
          <select className="input-field" style={{ marginBottom: 0 }} value={course.grade} onChange={e => updateCourse(i, 'grade', e.target.value)}>
            {Object.keys(GRADE_POINTS).map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <button className="btn btn-secondary" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => removeCourse(i)}>❌</button>
        </div>
      ))}

      <button className="btn btn-secondary" style={{ marginTop: '1rem', marginBottom: '2rem' }} onClick={addCourse}>+ Add Course</button>

      <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'var(--text-muted)' }}>
          Total Credits: <strong>{totalCredits}</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Semester GPA</div>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{gpa}</div>
        </div>
      </div>
    </div>
  );
}
