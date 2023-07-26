import { Dialog, DialogContent, Box } from '@mui/material';
import { useState } from 'react';
import Zoom from '@mui/material/Zoom';
import CUITextField from '../customUI/cui-textfield';
import CUIButton from '../customUI/cui-button';

// regular expression for positive Integer, cant be zero
const regexPInt = /^[1-9]\d*$/;
// const regexP = /^\d+(\.\d+)?$/;
// regular expression for positive number, cant be zero
const regexP = /^(?!0\d)(?:\d*\.\d+|\d+)$/;

const pHelperText = '請輸入正數';
const pIHelperText = '請輸入正整數';

// TODO: DietCardDialog
// NOTE: try as moduler as possible
function ExeCardDialog({
  open,
  onClose,
  item,
  setItem,
  exerciseScheduleList,
  setExerciseScheduleList,
}) {
  const customTransitionDuration = 500; // milliseconds

  const inputDefault = {
    weight: { error: false, text: '' },
    reps: { error: false, text: '' },
    sets: { error: false, text: '' },
  }; //=== for input validation
  const [input, setInput] = useState(inputDefault);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here
    // console.log(
    //   item.sid,
    //   item.exercise_name,
    //   Number(item.weight),
    //   Number(item.reps),
    //   Number(item.sets)
    // );
    setExerciseScheduleList([
      ...exerciseScheduleList,
      {
        id: crypto.randomUUID(),
        sid: item.sid,
        name: item.exercise_name,
        quantity: item.weight,
        reps: item.reps,
        sets: item.sets,
      },
    ]);
    // console.log(exerciseScheduleList[0]);
    onClose();
  };

  const handleClose = () => {
    onClose();
    setInput({ ...inputDefault });
    // console.log(inputDefault);
  };

  return (
    // FIXME: dialog width
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Zoom}
      transitionDuration={customTransitionDuration}
    >
      <DialogContent>
        {/* {console.log(item)} */}
        <img
          src={'/react-imgs/record/exercise/' + item?.img}
          alt="Item"
          style={{ width: '100%' }}
        />
        <CUITextField
          label="重量(kg)"
          type="number"
          helperText={input.weight.text}
          error={input.weight.error}
          onChange={(e) => {
            const weight = e.target.value;
            if (regexP.test(weight)) {
              setInput((prevInput) => ({
                ...prevInput,
                weight: {
                  text: '',
                  error: false,
                },
              }));
              setItem((prevItem) => ({
                ...prevItem,
                weight: weight,
              }));
            } else {
              setInput((prevInput) => ({
                ...prevInput,
                weight: {
                  text: pHelperText,
                  error: true,
                },
              }));
            }
          }}
          sx={{ width: '25%', mx: 2 }}
          required
        />
        <CUITextField
          label="次數"
          type="number"
          helperText={input.reps.text}
          error={input.reps.error}
          onChange={(e) => {
            const reps = e.target.value;
            if (regexPInt.test(reps)) {
              setInput((prevInput) => ({
                ...prevInput,
                reps: {
                  text: '',
                  error: false,
                },
              }));
              setItem((prevItem) => ({
                ...prevItem,
                reps: reps,
              }));
            } else {
              setInput((prevInput) => ({
                ...prevInput,
                reps: {
                  text: pIHelperText,
                  error: true,
                },
              }));
            }
          }}
          sx={{ width: '25%', mx: 2 }}
          required
        />
        <CUITextField
          label="組數"
          type="number"
          helperText={input.sets.text}
          error={input.sets.error}
          // value={item?.input3Value}
          onChange={(e) => {
            const sets = e.target.value;
            if (regexPInt.test(sets)) {
              setInput((prevInput) => ({
                ...prevInput,
                sets: {
                  text: '',
                  error: false,
                },
              }));
              setItem((prevItem) => ({
                ...prevItem,
                sets: sets,
              }));
            } else {
              setInput((prevInput) => ({
                ...prevInput,
                sets: {
                  text: pIHelperText,
                  error: true,
                },
              }));
            }
          }}
          sx={{ width: '25%', mx: 2 }}
          required
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {' '}
          <CUIButton
            onClick={handleClose}
            color={'light_grey'}
            sx={{ width: '35%', mx: 1 }}
          >
            取消
          </CUIButton>
          <CUIButton
            sx={{
              width: '35%',
              mx: 1,
            }}
            onClick={handleSubmit}
            disabled={
              input.weight.error ||
              input.reps.error ||
              input.sets.error ||
              !regexP.test(item?.weight) ||
              !regexPInt.test(item.reps) ||
              !regexPInt.test(item.sets)
            }
          >
            加入
          </CUIButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export { ExeCardDialog };
