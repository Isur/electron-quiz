import fs from 'fs';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global.styles';
import { useTheme } from './Themes';
import { QuestionPage } from './Pages';
import AnswerPrepare from './Utils/AnswerPrepare';

const { ipcRenderer } = window.require('electron');

const data = fs.readFileSync('questions.json');
const parsed = JSON.parse(data.toString());
const questions = AnswerPrepare(parsed);

export default function App() {
  const { selectedTheme, toggleTheme } = useTheme();

  ipcRenderer.once('THEME_CHANGE', () => {
    toggleTheme();
  });

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<QuestionPage data={{ questions }} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
