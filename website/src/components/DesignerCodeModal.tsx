import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalHead from './ModalHead';
import Code from './Code';

const modalBoxStyle = {
  position: 'absolute',
  minWidth: '70%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #eee',
  borderRadius: 1,
  boxShadow: 24,
};

const DesignerCodeModal = ({
  code,
  open,
  handleClose,
  codeMode,
  modes,
  setCodeMode,
}: {
  code: string;
  open: boolean;
  handleClose: () => void;
  modes: string[];
  codeMode: string;
  setCodeMode: (mode: string) => void;
}) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={modalBoxStyle}>
      <div style={{ maxWidth: '100vw', maxHeight: '100vh', overflow: 'auto', padding: '1rem' }}>
        <ModalHead title="Get Code" handleClose={handleClose} />
        <ul className="tabs tabs--block">
          {modes.map((m) => (
            <li
              key={m}
              onClick={() => setCodeMode(m)}
              className={`tabs__item ${codeMode === m ? 'tabs__item--active' : ''}`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </li>
          ))}
        </ul>
        <div style={{ maxHeight: '80vh', overflow: 'auto' }}>
          <Code code={code} language="typescript" />
        </div>
      </div>
    </Box>
  </Modal>
);

export default DesignerCodeModal;
