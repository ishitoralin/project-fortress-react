import styles from '@/styles/member.module.css';
import 'react-image-crop/dist/ReactCrop.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useRef, useState } from 'react';
import CUIButton from '../customUI/cui-button';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from 'react-image-crop';
import { toast } from 'react-hot-toast';
function generateDownload(blob) {
  const previewUrl = window.URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.download = 'cropPreview.png';
  anchor.href = URL.createObjectURL(blob);
  anchor.click();

  window.URL.revokeObjectURL(previewUrl);
}
const getCroppedImg = (image, crop, fileName) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
  console.log(canvas);
  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        blob.name = fileName;
        resolve(blob);
        if (process.env.NODE_ENV !== 'production') generateDownload(blob);
      },
      'image/jpeg',
      1
    );
  });
};
export default function ImgUploadModal({ open = false, handleClose }) {
  const fileRef = useRef(null);
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState('');
  const blobUrlRef = useRef('');
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  /*  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0); */

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0].size / (1024 * 1024) > 1) {
      toast.error('圖片size大於1MB');
      return;
    }
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    /*  if (width > 600 || height > 600) {
      toast.error('圖片大於長寬大於 600px 請更換圖片');
      return;
    } */

    // setCrop(centerAspectCrop(width, height, 1));
    setCrop({
      unit: '%',
      x: 50,
      y: 50,
      width: 90,
      aspect: 1,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <input
        accept="image/*"
        onChange={handleFileChange}
        ref={fileRef}
        type="file"
        name="avatar"
        hidden
      />
      <DialogTitle>請上傳圖片</DialogTitle>
      <DialogContent>
        {!!imgSrc && (
          <ReactCrop
            className={`${styles['crop-container']}`}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={1}
            keepSelection={true}
            minWidth={100}
          >
            <img
              ref={imgRef}
              alt="裁切圖片"
              src={imgSrc}
              //   style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
      </DialogContent>

      <DialogActions>
        <CUIButton
          color={'main_white'}
          onClick={() => {
            handleClose();
          }}
        >
          取消
        </CUIButton>
        <CUIButton
          color={'steel_grey'}
          onClick={() => {
            fileRef.current.click();
          }}
        >
          預覽圖片
        </CUIButton>
        {completedCrop?.height > 0 && (
          <CUIButton
            color={'steel_grey'}
            onClick={() => {
              getCroppedImg(
                imgRef.current,
                completedCrop,
                fileRef.current.files[0].fileName
              );
            }}
          >
            上傳圖片
          </CUIButton>
        )}
      </DialogActions>
    </Dialog>
  );
}
