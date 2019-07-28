<div class="widgets">
    <!-- Login Widget -->
    <div class="widgets_head"><h1 class="widgets_title">Log in</h1></div>
    <div class="widgets_content">
        <div class="login">
            <form action="core/login.php" method="POST">
                <p><label>Username/email</label></p>
                <p style="height: 16px;"><input class="login_input" type="text" name="username" placeholder=""></p>
                <br>
                <p><label">Password</label></p>
                <p style="height: 16px;"><input class="login_input" type="text" name="password" placeholder=""></p>
                <br>
                <p align="center"><button class="login_button" type="submit" name="login">Log in</button>
            </form>
        </div>
    </div>
    <!-- Staff Widget -->
    <div class="widgets_head"><h1 class="widgets_title">Staff</h1></div>
    <div class="widgets_content"><?php include_once 'widgets/staff_widget.php' ?></div>
</div>