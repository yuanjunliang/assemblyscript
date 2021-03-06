declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type f32 = number;
  type f64 = number;
  type bool = any;
  export function getLo(): u32;
  export function getHi(): u32;
  export function clz(loLeft: u32, hiLeft: u32): void;
  export function ctz(loLeft: u32, hiLeft: u32): void;
  export function popcnt(loLeft: u32, hiLeft: u32): void;
  export function eqz(loLeft: u32, hiLeft: u32): void;
  export function add(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function sub(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function mul(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function div_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function div_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function rem_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function rem_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function and(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function or(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function xor(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function shl(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function shr_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function shr_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function rotl(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function rotr(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function eq(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function ne(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function lt_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function lt_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function le_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function le_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function gt_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function gt_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function ge_s(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
  export function ge_u(loLeft: u32, hiLeft: u32, loRight: u32, hiRight: u32): void;
}
export default ASModule;
