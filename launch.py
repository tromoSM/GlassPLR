import webview
class API():
    def min(self,data):
        webview.windows[0].minimize()
    def max(self,data):
        webview.windows[0].maximize()
    def close(self,data):
        webview.windows[0].destroy()
    def res(self,data):
        webview.windows[0].restore()
main=webview.create_window("tromoSM | Test 1","index.html",js_api=API(),shadow=True,width=800,height=450,background_color="#ffffff",frameless=True,resizable=True,easy_drag=False)
webview.start() 
