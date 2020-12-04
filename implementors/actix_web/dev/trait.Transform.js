(function() {var implementors = {};
implementors["actix_web"] = [{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for Compress <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Transform&lt;S&gt; for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Transform&lt;S, Request = S::Request, Response = S::Response, Error = S::Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::InitError: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Transform: 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for DefaultHeaders <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for ErrorHandlers&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for Logger <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for NormalizePath <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()