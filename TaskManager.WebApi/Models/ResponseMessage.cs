using System;
using System.Net;

namespace TaskManager.WebApi.Models
{
    /// <summary>
    /// Success - Boolean - Response OK or NOT
    /// Content - Dynamic - Return a Object or any other thing
    /// Message - String - Message of response
    /// Status - Integer - Response Status
    /// </summary>
    public class ResponseMessage
    {
        public ResponseMessage(bool Success, dynamic Content, string Message, HttpStatusCode Status)
        {
            this.Success = Success;
            this.Content = Content;
            this.Message = Message;
            this.Status = Status;
        }
        public Boolean Success { get; set; }
        public dynamic Content { get; set; }
        public String Message { get; set; }
        public HttpStatusCode Status { get; set; }
    }
}