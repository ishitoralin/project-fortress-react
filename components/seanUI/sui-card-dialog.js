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
  // console.log(item);
  const customTransitionDuration = 500; // milliseconds
  // console.log(item)
  const inputDefault = {
    quantity: { error: false, text: '' },
    reps: { error: false, text: '' },
    sets: { error: false, text: '' },
  }; //=== for input validation
  const [input, setInputExam] = useState(inputDefault);

  const handleSubmit = (event) => {
    // TODO: edit if id exist
    event.preventDefault(); // Prevent default form submission behavior

    // if exerciseScheduleList has obj.id equal to item.id, then its editing
    // else its adding
    const isID = exerciseScheduleList.some((obj) => obj.id === item.id);

    // console.log(!!item.id, isID);
    if (isID) {
      setExerciseScheduleList(
        [...exerciseScheduleList].map((obj) => {
          obj.id === item.id
            ? {
                ...obj,
                quantity: item.quantity,
                reps: item.reps,
                sets: item.sets,
              }
            : obj;
        })
      );
    } else {
      setExerciseScheduleList([
        ...exerciseScheduleList,
        {
          id: crypto.randomUUID(),
          sid: item.sid,
          exercise_name: item.exercise_name,
          exercise_description: item.exercise_description,
          img: item.img,
          vid: item.vid,
          quantity: item.quantity,
          reps: item.reps,
          sets: item.sets,
        },
      ]);
    }

    // console.log(exerciseScheduleList[0]);
    onClose();
  };

  // === handle dialog的各種close方式
  const handleClose = () => {
    onClose();
    setInputExam({ ...inputDefault });
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
        {/* TODO:要改成影片 */}
        <img
          src={'/react-imgs/record/exercise/' + item?.img}
          alt="Item"
          style={{ width: '100%' }}
        />
        {/* TODO: how to give default value? */}
        <CUITextField
          label="重量(kg)"
          type="number"
          helperText={input.quantity.text}
          // value={item.quantity || '0'}
          error={input.quantity.error}
          onChange={(e) => {
            const quantity = e.target.value;
            if (regexP.test(quantity)) {
              setInputExam((prevInput) => ({
                ...prevInput,
                quantity: {
                  text: '',
                  error: false,
                },
              }));
              setItem((prevItem) => ({
                ...prevItem,
                quantity: quantity,
              }));
            } else {
              setInputExam((prevInput) => ({
                ...prevInput,
                quantity: {
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
              setInputExam((prevInput) => ({
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
              setInputExam((prevInput) => ({
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
              setInputExam((prevInput) => ({
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
              setInputExam((prevInput) => ({
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
            onClick={() => {
              onClose();
            }}
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
              input.quantity.error ||
              input.reps.error ||
              input.sets.error ||
              !regexP.test(item?.quantity) ||
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
