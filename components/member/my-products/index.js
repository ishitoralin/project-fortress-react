import { useState, useEffect, useRef } from 'react';
import styles from '../member.module.css';
import ProductsTable from './products-table';
import MemberPagenation from '../member-pagenation';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import CUICard from '@/components/customUI/cui-card';
import axios from 'axios';
import CUIFilter from '@/components/customUI/cui-filter';
import CUISlider from '@/components/customUI/cui-slider';
import CUISearch from '@/components/customUI/cui-search';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth/useAuth';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function MyProducts() {
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  const [queryObject, setQueryObject] = useState({});
  const keywordRef = useRef();
  const router = useRouter();
  const { auth } = useAuth();
  const getMyfavoriteProducts = async (page = 1) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-products2?page=${page}`
      );
      if (res.data.output.redirect !== '') {
        const refetch = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_PORT}${res.data.output.redirect}`
        );
        if (refetch.data.output.rows > 0) {
          {
            setData(() => {
              return { ...refetch.data.output };
            });
          }
        }
        return;
      }

      if (res.data?.output);
      {
        setData(res.data?.output);
      }
    } catch (error) {
      getMyfavoriteProducts(page);
    }
  };
  useEffect(() => {
    getMyfavoriteProducts();
  }, []);
  useEffect(() => {
    if (router.query?.page) {
      getMyfavoriteProducts(router.query.page);
    }
  }, [router]);

  return (
    <>
      <div className={`${styles['my-container']}`}>
        {data?.rows.length > 0 ? (
          <div className={`${styles['my-products-section']}`}>
            <CUIFilter
              sx={{
                width: '20%',
                minWidth: '250px',
                flexShrink: 0,
                '@media (max-width: 768px)': {
                  display: 'none',
                },
              }}
              filterIcon={
                <IconButton onClick={() => {}}>
                  <CancelIcon />
                </IconButton>
              }
              color={'steel_grey'}
              label="篩選器"
              onClick={() => {
                console.log(123);
              }}
              items={[
                <CUISearch
                  key={'search'}
                  color={'steel_grey'}
                  label="商品名稱"
                  inputRef={keywordRef}
                />,
                <CUISlider
                  key={123}
                  label="價格範圍"
                  value={[]}
                  min={50}
                  max={4000}
                  step={50}
                  onChange={() => {}}
                />,
              ]}
            />
            <Box
              sx={{
                width: '100%',
                '@media (max-width: 768px)': {
                  width: '100%',
                },

                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CUICard
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  backgroundColor: 'var(--steel-light-grey)',
                  gap: '5%',
                  padding: '2% 2.5% 6% 2.5%',
                  '@media (max-width: 1024px)': {
                    gap: '5%',
                    padding: '2% 0% 20.5% 4.5%',
                  },
                  '@media (max-width: 768px)': {
                    justifyContent: 'center',
                    gap: '0%',
                    padding: '30px 0',
                  },
                }}
              >
                {data.rows.map((el, i) => (
                  <Box
                    component={motion.div}
                    key={el.sid}
                    sx={{
                      width: '30%',
                      flexShrink: '0',
                      alignSelf: 'stretch',
                      '@media (max-width: 1024px)': {
                        width: '45%',
                      },
                      '@media (max-width: 768px)': {
                        width: '90%',
                        marginBottom: '20px',
                      },
                    }}
                  >
                    <CUICard sx={{ padding: '15px', height: '100%' }}>
                      <Box
                        sx={{
                          width: '100%',
                          aspectRatio: '1 / 1',
                          display: 'flex',
                          overflow: 'hidden',
                          marginBottom: '10px',
                        }}
                      >
                        <Link
                          href={`${process.env.NEXT_PUBLIC_FRONTEND_PORT}/product/category/${el?.category_sid}/${el?.product_sid}`}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            maxHeight: '100%',
                          }}
                        >
                          <img
                            src={`${el?.picture}`}
                            alt="商品圖片"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              borderRadius: '3px',
                            }}
                          />
                        </Link>
                      </Box>
                      <Typography
                        sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {el?.name}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        ${el?.price.toLocaleString()}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <DeleteIcon
                          onClick={() => {
                            const deleteFavoriteProducts = async () => {
                              const res = await axios.delete(
                                `${process.env.NEXT_PUBLIC_BACKEND_PORT}/api/member/member-favorite-products`,
                                {
                                  data: {
                                    pid: el.product_sid,
                                    cid: el.category_sid,
                                  },
                                }
                              );
                              toast.success('刪除商品成功');
                              setData((prev) => {
                                const newRows = prev.rows.filter((el2, i2) => {
                                  return i2 !== i;
                                });

                                return { ...prev, rows: newRows };
                              });
                            };
                            deleteFavoriteProducts();
                          }}
                          sx={{ '&:hover': { fill: 'red', cursor: 'pointer' } }}
                        />
                      </Box>
                    </CUICard>
                  </Box>
                ))}
              </CUICard>
              <MemberPagenation data={data} />
            </Box>
          </div>
        ) : (
          <>
            <div className={`${styles['empty-data']}`}>
              <Typography
                align="center"
                variant="h4"
                sx={{ padding: '10px 15px' }}
              >
                目前沒有收藏商品喔
              </Typography>
              <Link
                href={`/product`}
                style={{ textDecoration: 'underline', color: 'blue' }}
              >
                來去逛逛
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
