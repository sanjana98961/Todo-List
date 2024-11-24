import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { updateTodo } from '../Features/Todo/todoSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditPopup({open = false, setOpen, item, updateItem}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(item?.text);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="rounded-lg" sx={style}>
          <Typography className='text-xl font-bold text-center' variant='h' id="modal-modal-title">
            Update Todo
          </Typography>
          <Typography className='flex justify-between' id="modal-modal-description" sx={{ mt: 2 }}>
            <input className='border pl-2 border-gray-400 rounded-lg' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className='border border-gray-200 rounded-lg p-2 bg-green-500' onClick={() => {
             updateItem( item.id, value )
             handleClose() }}>Save Changes</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
