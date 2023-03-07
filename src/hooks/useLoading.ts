let loading: { close: () => void };
function openLoading() {
  loading = ElLoading.service({
    lock: true,
    text: '正在请求数据....',
    background: 'rgba(0, 0, 0, 0.5)',
  });
}
function closeLoading() {
  loading.close();
}
export { openLoading, closeLoading };
