import { useState } from 'react'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'

// ── 이미지 에셋 (피그마) ──
const IMG_FIRE = 'https://www.figma.com/api/mcp/asset/b369a076-730f-4120-a450-a39a694322ef'
const IMG_FIRE_SMALL = 'https://www.figma.com/api/mcp/asset/c8ab2377-44e5-43fb-8794-4d2a3de55e35'
const IMG_FIRE_SHADOW = 'https://www.figma.com/api/mcp/asset/820aa455-4aa4-4cfd-894a-ff344784426d'
const IMG_BELL = 'https://www.figma.com/api/mcp/asset/b94ba93f-523c-4685-8181-071578fb33b4'
const IMG_SKY = 'https://www.figma.com/api/mcp/asset/8f2886f0-2aeb-4a09-ad4a-fcd5678b7ea8'
const IMG_REVIEW_PHOTO = 'https://www.figma.com/api/mcp/asset/13d0f085-5b8c-4e8e-b8c7-bd2276ddd740'
const IMG_TRIANGLE = 'https://www.figma.com/api/mcp/asset/459b5c87-93fe-43e1-971d-f422db6e5597'
const IMG_SHARE = 'https://www.figma.com/api/mcp/asset/b453e63d-ce0a-428b-97cf-c4cd5150d46d'

// ── 미션 데이터 ──
const MISSIONS = [
  {
    title: '오늘 하늘 사진 한 장 찍어봐',
    subtitle: '같은 하늘은 내일 다시 안 와',
    duration: '약 1분',
    tip: '평소랑 다른 감각을 깨우는 것만으로도 뇌는 새로운 경로를 만들어요',
    otherReviews: [
      { nickname: '홍길동', comment: '몇년만에 하늘을 바라본 것 같아요.', likes: 13 },
      { nickname: '김철수', comment: '출근길에 잠깐 멈춰 찍었는데 좋았어요.', likes: 7 },
    ],
  },
  {
    title: '퇴근길 딱 한 정거장만 걸어봐',
    subtitle: '익숙한 길도 걸으면 달라 보여',
    duration: '약 15분',
    tip: '걷기는 창의적인 생각을 60% 늘려준다는 연구가 있어요',
    otherReviews: [
      { nickname: '이영희', comment: '생각보다 너무 좋았어요.', likes: 5 },
    ],
  },
]

// ── 공통 색상 ──
const C = {
  primary: '#FF6B35',
  bg: '#FAFAF9',
  white: '#FFFFFF',
  dark: '#1C1917',
  subtitle: '#78716C',
  gray100: '#F5F5F4',
  gray200: '#E7E5E4',
  gray400: '#A8A29E',
  gray600: '#57534E',
  gray700: '#44403C',
  gray800: '#292524',
  bubble: '#363636',
  disabledBg: '#E5E5E5',
  disabledText: '#919191',
  btnGrayText: '#767676',
}

// ── FlameIndicator ──
function FlameIndicator({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, width: 87 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 8,
            borderRadius: 100,
            background: i < count ? C.primary : C.gray200,
          }}
        />
      ))}
    </div>
  )
}

// ── BottomTabBar ──
function BottomTabBar({ active = 'home' }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      display: 'flex', padding: '8px 16px 32px',
      background: C.white, zIndex: 100,
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4,
          background: active === 'home' ? C.gray800 : C.gray200,
        }} />
        <span style={{
          fontFamily: 'var(--font-family)', fontSize: 14, lineHeight: 1.5,
          fontWeight: active === 'home' ? 600 : 500, textAlign: 'center',
          color: active === 'home' ? C.gray800 : C.gray400,
        }}>홈</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4,
          background: active === 'history' ? C.gray800 : C.gray200,
        }} />
        <span style={{
          fontFamily: 'var(--font-family)', fontSize: 14, lineHeight: 1.5,
          fontWeight: active === 'history' ? 600 : 500, textAlign: 'center',
          color: active === 'history' ? C.gray800 : C.gray400,
        }}>내경험</span>
      </div>
    </div>
  )
}

// ── FireCharacter ──
function FireCharacter({ message, completedCount }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '8px 0' }}>
      {/* 말풍선 */}
      <div style={{ position: 'relative' }}>
        <div style={{
          background: C.bubble, borderRadius: 4, padding: '6px 16px',
        }}>
          <span style={{
            fontFamily: 'var(--font-family)', fontSize: 13, fontWeight: 500,
            color: C.white, letterSpacing: -0.26, whiteSpace: 'nowrap',
          }}>{message}</span>
        </div>
        <img src={IMG_TRIANGLE} alt="" style={{
          position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%) rotate(180deg)',
          width: 11, height: 10,
        }} />
      </div>
      {/* 불꽃 캐릭터 */}
      <div style={{ position: 'relative', width: 53, height: 65 }}>
        <img src={IMG_FIRE} alt="" style={{
          width: '205%', height: '166%', position: 'absolute',
          left: '-53%', top: '-39%', objectFit: 'contain',
        }} />
      </div>
      <img src={IMG_FIRE_SHADOW} alt="" style={{ width: 49, height: 10, opacity: 0.3 }} />
      <FlameIndicator count={completedCount} />
    </div>
  )
}

// ── Header ──
function Header() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 16px 0',
    }}>
      <span style={{
        fontFamily: 'var(--font-family)', fontSize: 18, fontWeight: 700, color: '#000',
      }}>Ignis</span>
      <img src={IMG_BELL} alt="알림" style={{ width: 24, height: 24 }} />
    </div>
  )
}

// ══════════════════════════════════
// S1: 홈_미션 미확인
// ══════════════════════════════════
function ScreenHomeBefore({ completedCount, onStart }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24 }}>
        <FireCharacter message="오늘은 어떤 경험을 할까?" completedCount={completedCount} />
      </div>
      {/* 미션 카드 */}
      <div style={{ padding: '24px 16px 120px' }}>
        <div style={{
          background: C.white, borderRadius: 20, padding: '48px 20px',
          border: `1px solid ${C.gray200}`,
          boxShadow: '0px 0px 30px rgba(43,82,255,0.5), 0px 0px 8px rgba(0,0,0,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            fontFamily: 'var(--font-family)', fontSize: 24, fontWeight: 700,
            color: C.dark, textAlign: 'center', lineHeight: 1.5,
          }}>
            오늘의 미션이<br />도착했어요
          </div>
          <Button variant="primary" size="large" onClick={onStart}
            style={{ width: 'auto', padding: '0 32px', background: C.primary }}>
            시작하기
          </Button>
        </div>
      </div>
      <BottomTabBar active="home" />
    </div>
  )
}

// ══════════════════════════════════
// S2: 미션 상세
// ══════════════════════════════════
function ScreenMissionDetail({ mission, missionChanged, onBack, onExperience, onChangeMission }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <AppBar
        title="오늘의 미션"
        onBack={onBack}
        right={<img src={IMG_SHARE} alt="공유" style={{ width: 24, height: 24 }} />}
      />
      {/* 미션 카드 */}
      <div style={{ padding: '16px 25px' }}>
        <div style={{
          border: `1px solid ${C.gray200}`, borderRadius: 16, padding: 20,
          boxShadow: '0px 0px 4px rgba(0,0,0,0.25)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
        }}>
          <img src={IMG_SKY} alt="미션 이미지" style={{
            width: '100%', aspectRatio: '285/159', borderRadius: 16, objectFit: 'cover',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, width: '100%' }}>
            <span style={{
              background: C.gray100, borderRadius: 100, padding: '3px 10px',
              fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 500, color: C.gray600,
            }}>{mission.duration}</span>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 24, fontWeight: 700,
              color: C.dark, textAlign: 'center', lineHeight: 1.5,
            }}>{mission.title}</div>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 400,
              color: C.subtitle, textAlign: 'center',
            }}>{mission.subtitle}</div>
          </div>
        </div>
      </div>

      {/* 팁 영역 */}
      <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'flex-start', gap: 0 }}>
        <div style={{ width: 54, height: 48, flexShrink: 0, position: 'relative' }}>
          <img src={IMG_FIRE_SMALL} alt="" style={{
            width: '146%', height: '166%', position: 'absolute',
            left: '-23%', top: '-39%', objectFit: 'contain',
          }} />
        </div>
        <div style={{
          background: C.gray100, borderRadius: 12, padding: 10, flex: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-family)', fontSize: 14, color: C.gray800, lineHeight: 1.5,
          }}>"{mission.tip}"</span>
        </div>
      </div>

      {/* 구분 띠 */}
      <div style={{ background: C.gray100, height: 9, width: '100%', margin: '24px 0' }} />

      {/* 경험 후기 */}
      <div style={{ padding: '0 16px 120px' }}>
        <div style={{
          fontFamily: 'var(--font-family)', fontSize: 20, fontWeight: 700,
          color: C.dark, marginBottom: 20,
        }}>12명이 경험했어요</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 23 }}>
          {mission.otherReviews.map((r, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{
                width: '100%', height: 193, borderRadius: 12, overflow: 'hidden',
              }}>
                <img src={IMG_REVIEW_PHOTO} alt="" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 100, background: C.gray200, flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 600, color: C.dark, flex: 1,
                }}>{r.nickname}</span>
                <span style={{
                  fontFamily: 'var(--font-family)', fontSize: 12, color: C.subtitle,
                }}>신고하기</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-family)', fontSize: 16, color: C.subtitle, lineHeight: 1.5,
              }}>{r.comment}</div>
              <div style={{
                background: C.gray200, borderRadius: 100, padding: '4px 12px', alignSelf: 'flex-start',
              }}>
                <span style={{
                  fontFamily: 'var(--font-family)', fontSize: 15, fontWeight: 500, color: C.subtitle,
                }}>{r.likes} 좋아요</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'flex', gap: 8, padding: '8px 16px 34px',
        background: C.white, zIndex: 100,
      }}>
        <button
          disabled={missionChanged}
          onClick={onChangeMission}
          style={{
            flex: 1, height: 48, borderRadius: 10, border: 'none',
            background: missionChanged ? C.disabledBg : C.gray100,
            fontFamily: 'var(--font-family)', fontSize: 17, fontWeight: 600,
            color: missionChanged ? C.disabledText : C.btnGrayText,
            cursor: missionChanged ? 'not-allowed' : 'pointer',
          }}
        >한번 바꾸기</button>
        <Button variant="primary" size="large" onClick={onExperience}
          style={{ flex: 1, background: C.primary }}>
          경험했어요
        </Button>
      </div>
    </div>
  )
}

// ══════════════════════════════════
// S3: 후기 작성
// ══════════════════════════════════
function ScreenReview({ reviewText, setReviewText, onComplete }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      {/* 상단바 - 뒤로가기 없음 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: 56, padding: '0 16px',
      }}>
        <span style={{
          fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 500, color: '#000',
        }}>경험 후기</span>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <div style={{
          fontFamily: 'var(--font-family)', fontSize: 24, fontWeight: 700,
          color: C.dark, marginBottom: 8,
        }}>오늘의 경험, 어땠나요?</div>
        <div style={{
          fontFamily: 'var(--font-family)', fontSize: 18, fontWeight: 500,
          color: C.gray600, marginBottom: 24,
        }}>한마디 남겨도, 그냥 넘어가도 괜찮아요</div>

        <textarea
          placeholder="오늘 경험은 어땠나요..."
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
          style={{
            width: '100%', height: 196, borderRadius: 12, border: `1px solid ${C.gray200}`,
            background: C.gray100, padding: '20px 18px', boxSizing: 'border-box',
            fontFamily: 'var(--font-family)', fontSize: 18, color: C.gray800,
            resize: 'none', outline: 'none',
          }}
        />

        <button style={{
          display: 'flex', alignItems: 'center', gap: 4, marginTop: 20,
          background: C.gray100, border: `1px solid ${C.gray200}`, borderRadius: 10,
          padding: '14px 20px', cursor: 'pointer',
        }}>
          <span style={{ fontSize: 20, color: C.gray700 }}>+</span>
          <span style={{
            fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 600, color: C.gray700,
          }}>사진 추가</span>
        </button>
      </div>

      {/* 완료 버튼 */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        padding: '8px 16px 34px', background: C.bg, zIndex: 100,
      }}>
        <Button variant="primary" size="xl" onClick={onComplete}
          style={{ background: C.primary }}>
          완료
        </Button>
      </div>
    </div>
  )
}

// ══════════════════════════════════
// S4: 미션 완료 (축하)
// ══════════════════════════════════
function ScreenComplete({ completedCount, onHome, onHistory }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <div style={{ padding: '33px 29px 0' }}>
        <span style={{
          fontFamily: 'var(--font-family)', fontSize: 18, fontWeight: 700, color: '#000',
        }}>Ignis</span>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: 40,
      }}>
        {/* 불꽃 */}
        <div style={{ position: 'relative', width: 65, height: 80, marginBottom: 12 }}>
          <img src={IMG_FIRE} alt="" style={{
            width: '205%', height: '166%', position: 'absolute',
            left: '-53%', top: '-39%', objectFit: 'contain',
          }} />
        </div>
        <FlameIndicator count={completedCount} />

        {/* 텍스트 */}
        <div style={{
          fontFamily: 'var(--font-family)', fontSize: 24, fontWeight: 700,
          color: C.dark, textAlign: 'center', lineHeight: 1.4, marginTop: 40,
        }}>
          경험 불씨를<br />모았어요!
        </div>
        <div style={{
          fontFamily: 'var(--font-family)', fontSize: 18, fontWeight: 500,
          color: C.gray600, textAlign: 'center', marginTop: 14,
        }}>작은 새로움이 당신을 변화 시켰어요</div>

        {/* 통계 카드 */}
        <div style={{
          background: C.gray100, borderRadius: 20, padding: '26px 20px',
          width: 168, marginTop: 40, textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 500, color: C.gray600,
            marginBottom: 6,
          }}>지금까지 경험한 새로움</div>
          <div style={{
            fontFamily: 'var(--font-family)', fontSize: 32, fontWeight: 700, color: '#000',
          }}>{completedCount}</div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        padding: '8px 16px 34px', display: 'flex', gap: 8,
        background: C.bg, zIndex: 100,
      }}>
        <button onClick={onHome} style={{
          flex: 1, height: 56, borderRadius: 10, border: 'none',
          background: C.disabledBg, fontFamily: 'var(--font-family)',
          fontSize: 17, fontWeight: 600, color: C.disabledText, cursor: 'pointer',
        }}>홈</button>
        <Button variant="primary" size="xl" onClick={onHistory}
          style={{ flex: 1, background: C.primary }}>
          내역 보기
        </Button>
      </div>
    </div>
  )
}

// ══════════════════════════════════
// S5: 홈_미션 완료
// ══════════════════════════════════
function ScreenHomeAfter({ mission, completedCount, reviewText, onHistoryClick }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24 }}>
        <FireCharacter message="오늘 새로운 경험을 했구나!" completedCount={completedCount} />
      </div>

      {/* 완료 미션 카드 */}
      <div style={{ padding: '24px 16px 120px' }}>
        <div style={{
          background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`,
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 57px 0' }}>
            <img src={IMG_SKY} alt="" style={{
              width: '100%', aspectRatio: '229/128', borderRadius: 12, objectFit: 'cover',
            }} />
          </div>
          <div style={{ padding: '20px 20px 0', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', background: C.primary, color: C.white,
              borderRadius: 100, padding: '3px 10px',
              fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 500,
            }}>완료</span>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 22, fontWeight: 700,
              color: C.dark, marginTop: 8, lineHeight: 1.5,
            }}>{mission.title}</div>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 16, color: C.subtitle, marginTop: 4,
            }}>{mission.subtitle}</div>
          </div>

          {reviewText ? (
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 16, color: C.subtitle,
              textAlign: 'center', padding: '16px 20px 0',
            }}>{reviewText}</div>
          ) : (
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 500,
              color: C.subtitle, textAlign: 'center', padding: '16px 0 0',
              textDecoration: 'underline', cursor: 'pointer',
            }}>후기 작성하기</div>
          )}

          <div style={{ padding: '20px 20px 24px' }}>
            <button onClick={onHistoryClick} style={{
              width: '100%', height: 46, borderRadius: 10,
              border: `1px solid ${C.gray200}`, background: C.white,
              fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 500,
              color: C.dark, cursor: 'pointer',
            }}>내 경험 보기</button>
          </div>
        </div>
      </div>
      <BottomTabBar active="home" />
    </div>
  )
}

// ══════════════════════════════════
// S6: 내 경험 (히스토리)
// ══════════════════════════════════
function ScreenHistory({ mission, reviewText, onBack }) {
  const today = new Date()
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`

  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <AppBar title="내 경험" onBack={onBack} />
      <div style={{ padding: '16px 16px 120px' }}>
        <div style={{
          background: C.white, borderRadius: 16, border: `1px solid ${C.gray200}`,
          padding: 20,
        }}>
          <div style={{
            fontFamily: 'var(--font-family)', fontSize: 18, fontWeight: 700,
            color: C.dark, marginBottom: 4,
          }}>{mission.title}</div>
          <div style={{
            fontFamily: 'var(--font-family)', fontSize: 14, color: C.subtitle, marginBottom: 12,
          }}>{dateStr}</div>
          {reviewText && (
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 16, color: C.gray600,
              lineHeight: 1.5, padding: '12px 0', borderTop: `1px solid ${C.gray200}`,
            }}>{reviewText}</div>
          )}
        </div>
      </div>
      <BottomTabBar active="history" />
    </div>
  )
}

// ══════════════════════════════════
// S7: 홈_미션 진행중 이탈
// ══════════════════════════════════
function ScreenHomeInProgress({ mission, completedCount, onContinue }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24 }}>
        <FireCharacter message="오늘은 어떤 경험을 할까?" completedCount={completedCount} />
      </div>

      {/* 진행중 미션 카드 */}
      <div style={{ padding: '24px 16px 120px' }}>
        <div style={{
          background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`,
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 57px 0' }}>
            <img src={IMG_SKY} alt="" style={{
              width: '100%', aspectRatio: '229/128', borderRadius: 12, objectFit: 'cover',
            }} />
          </div>
          <div style={{ padding: '20px 20px 0', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', background: '#EEF0FF', color: '#4B6BFB',
              borderRadius: 100, padding: '3px 10px',
              fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: 500,
            }}>진행중</span>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 22, fontWeight: 700,
              color: C.dark, marginTop: 8, lineHeight: 1.5,
            }}>{mission.title}</div>
            <div style={{
              fontFamily: 'var(--font-family)', fontSize: 16, color: C.subtitle, marginTop: 4,
            }}>{mission.subtitle}</div>
          </div>

          <div style={{ padding: '20px 20px 24px' }}>
            <button onClick={onContinue} style={{
              width: '100%', height: 46, borderRadius: 10,
              border: `1px solid ${C.gray200}`, background: C.white,
              fontFamily: 'var(--font-family)', fontSize: 16, fontWeight: 500,
              color: C.dark, cursor: 'pointer',
            }}>이어서 진행하기</button>
          </div>
        </div>
      </div>
      <BottomTabBar active="home" />
    </div>
  )
}

// ══════════════════════════════════
// 메인 컴포넌트
// ══════════════════════════════════
export default function V4() {
  const [screen, setScreen] = useState('home_before')
  const [missionChanged, setMissionChanged] = useState(false)
  const [reviewText, setReviewText] = useState('')
  const [completedCount, setCompletedCount] = useState(0)
  const [currentMission, setCurrentMission] = useState(MISSIONS[0])

  switch (screen) {
    case 'home_before':
      return (
        <ScreenHomeBefore
          completedCount={completedCount}
          onStart={() => setScreen('mission_detail')}
        />
      )

    case 'mission_detail':
      return (
        <ScreenMissionDetail
          mission={currentMission}
          missionChanged={missionChanged}
          onBack={() => setScreen('home_inprogress')}
          onExperience={() => setScreen('review')}
          onChangeMission={() => {
            setCurrentMission(MISSIONS[1])
            setMissionChanged(true)
          }}
        />
      )

    case 'review':
      return (
        <ScreenReview
          reviewText={reviewText}
          setReviewText={setReviewText}
          onComplete={() => {
            setCompletedCount(prev => Math.min(prev + 1, 5))
            setScreen('complete')
          }}
        />
      )

    case 'complete':
      return (
        <ScreenComplete
          completedCount={completedCount}
          onHome={() => setScreen('home_after')}
          onHistory={() => setScreen('history')}
        />
      )

    case 'home_after':
      return (
        <ScreenHomeAfter
          mission={currentMission}
          completedCount={completedCount}
          reviewText={reviewText}
          onHistoryClick={() => setScreen('history')}
        />
      )

    case 'history':
      return (
        <ScreenHistory
          mission={currentMission}
          reviewText={reviewText}
          onBack={() => setScreen('home_after')}
        />
      )

    case 'home_inprogress':
      return (
        <ScreenHomeInProgress
          mission={currentMission}
          completedCount={completedCount}
          onContinue={() => setScreen('mission_detail')}
        />
      )

    default:
      return null
  }
}
