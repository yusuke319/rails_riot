<my-app>
    <div class="c-holyGrail">
        <header class="c-holyGrail__header">{ I18n.t('hello') }</header>
        <div class="c-holyGrail__body">
            <nav class="c-holyGrail__sidebar">side1</nav>
            <div class="c-holyGrail__content">
                <p>content</p>
            </div>
            <nav class="c-holyGrail__sidebar">side2</nav>
        </div>
        <footer class="c-holyGrail__footer">footer</footer>
    </div>

    <script>
        this.mixin('I18n');
    </script>
</my-app>