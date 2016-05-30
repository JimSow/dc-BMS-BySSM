<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>

<c:if test="${menu.depth gt 0}">
 <li>  
    <a href="${menu.resource}" class="<c:if test="${not empty menu.children}">dropdown-toggle</c:if><c:if test="${empty menu.children}">link-item</c:if>" target="navTab" rel="main">
        <span class="menu-text"> ${menu.name} </span>
        <c:if test="${not empty menu.children}"><b class="arrow fa fa-angle-down"></b></c:if>
    </a> 
    <b class="arrow"></b>
</c:if>

<c:if test="${not empty menu.children}">
    <ul class="<c:if test="${menu.depth eq 0}">nav nav-list</c:if><c:if test="${menu.depth gt 0}">submenu</c:if>">
        <c:forEach var="menu" items="${menu.children}">
            <c:set var="menu" value="${menu}" scope="request"/>
            <jsp:include page="leftTree.jsp"/>
        </c:forEach>              
    </ul>  
</c:if>  
