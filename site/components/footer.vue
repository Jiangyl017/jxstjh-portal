<script>
export default {
  props: {
    isCN: Boolean,
  },
  render() {
    const isCN = this.isCN;
    return (
      <footer id="footer">
        <div style="padding: 10px 144px;">水投江河前端架构组</div>
      </footer>
    );
  },
};
</script>
