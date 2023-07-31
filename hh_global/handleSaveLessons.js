import { getAuthHeaders } from './authCache';

const handleSaveLesson = async (lesson_sid, action) => {
  const result = {};
  const body = new URLSearchParams([
    [action === 'save' ? 'lsid' : 'sid', lesson_sid.toString()],
  ]);
  try {
    const res = await fetch(
      'http://localhost:3001/api/member/member-favorite-courses',
      {
        method: action === 'save' ? 'POST' : 'DELETE',
        headers: getAuthHeaders(),
        body,
      }
    );
    const fetchResult = await res.json();
    result.success = fetchResult.code === 200;
  } catch (error) {
    result.success = false;
    result.error = error;
  }

  return result;
};

export const saveLesson = (lesson_sid) => handleSaveLesson(lesson_sid, 'save');

export const cancelSaveLesson = (lesson_sid) =>
  handleSaveLesson(lesson_sid, 'cancel');
