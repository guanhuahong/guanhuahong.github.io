---
layout: post
title: 关于Vim找不到Python的问题
date: 2016-8-9 
categories: blog
tags: [node, node-sass, sass, binding.node]
description: vim找不到python，python已安装，vim中有+python/dyn
---

gvim 因为是msi安装，已支持+python/dyn和+python3/dyn

```
>gvim --version

VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Aug 10 2013 14:38:33)
MS-Windows 32 位图形界面版本 带 OLE 支持
编译者 mool@tororo
大型版本 带图形界面。  可使用(+)与不可使用(-)的功能:
+arabic             +ex_extra           +mouseshape         +syntax
+autocmd            +extra_search       +multi_byte_ime/dyn +tag_binary
+balloon_eval       +farsi              +multi_lang         +tag_old_static
+browse             +file_in_path       -mzscheme           -tag_any_white
++builtin_terms     +find_in_path       +netbeans_intg      +tcl/dyn
+byte_offset        +float              +ole                -tgetent
+cindent            +folding            +path_extra         -termresponse
+clientserver       -footer             +perl/dyn           +textobjects
+clipboard          +gettext/dyn        +persistent_undo    +title
+cmdline_compl      -hangul_input       -postscript         +toolbar
+cmdline_hist       +iconv/dyn          +printer            +user_commands
+cmdline_info       +insert_expand      -profile            +vertsplit
+comments           +jumplist           +python/dyn         +virtualedit
+conceal            +keymap             +python3/dyn        +visual
+cryptv             +langmap            +quickfix           +visualextra
+cscope             +libcall            +reltime            +viminfo
+cursorbind         +linebreak          +rightleft          +vreplace
+cursorshape        +lispindent         +ruby/dyn           +wildignore
+dialog_con_gui     +listcmds           +scrollbind         +wildmenu
+diff               +localmap           +signs              +windows
+digraphs           -lua                +smartindent        +writebackup
-dnd                +menu               -sniff              -xfontset
-ebcdic             +mksession          +startuptime        -xim
+emacs_tags         +modify_fname       +statusline         -xterm_save
+eval               +mouse              -sun_workshop       +xpm_w32
     系统 vimrc 文件: "$VIM\vimrc"
     用户 vimrc 文件: "$HOME\_vimrc"
 第二用户 vimrc 文件: "$HOME\vimfiles\vimrc"
 第三用户 vimrc 文件: "$VIM\_vimrc"
      用户 exrc 文件: "$HOME\_exrc"
  第二用户 exrc 文件: "$VIM\_exrc"
    系统 gvimrc 文件: "$VIM\gvimrc"
    用户 gvimrc 文件: "$HOME\_gvimrc"
第二用户 gvimrc 文件: "$HOME\vimfiles\gvimrc"
第三用户 gvimrc 文件: "$VIM\_gvimrc"
        系统菜单文件: "$VIMRUNTIME\menu.vim"
编译方式: cl -c /W3 /nologo  -I. -Iproto -DHAVE_PATHDEF -DWIN32   -DFEAT_CSCOPE 
-DFEAT_NETBEANS_INTG   -DFEAT_XPM_W32   -DWINVER=0x0400 -D_WIN32_WINNT=0x0400  
/Fo.\ObjGOLYHTRi386/ /Ox /GL -DNDEBUG  /Zl /MT -DFEAT_OLE -DFEAT_MBYTE_IME 
-DDYNAMIC_IME -DFEAT_GUI_W32 -DDYNAMIC_ICONV -DDYNAMIC_GETTEXT -DFEAT_TCL 
-DDYNAMIC_TCL -DDYNAMIC_TCL_DLL=\"tcl85.dll\" -DDYNAMIC_TCL_VER=\"8.5\" -DFEAT_PYTHON 
-DDYNAMIC_PYTHON -DDYNAMIC_PYTHON_DLL=\"python27.dll\" -DFEAT_PYTHON3 
-DDYNAMIC_PYTHON3 -DDYNAMIC_PYTHON3_DLL=\"python32.dll\" -DFEAT_PERL -DDYNAMIC_PERL 
-DDYNAMIC_PERL_DLL=\"perl514.dll\" -DFEAT_RUBY -DDYNAMIC_RUBY -DDYNAMIC_RUBY_VER=19 
-DDYNAMIC_RUBY_DLL=\"msvcrt-ruby192.dll\" -DFEAT_BIG /Fd.\ObjGOLYHTRi386/ /Zi
链接方式: link /RELEASE /nologo /subsystem:windows /LTCG:STATUS oldnames.lib kernel32.lib 
advapi32.lib shell32.lib gdi32.lib  comdlg32.lib ole32.lib uuid.lib /machine:i386 /nodefaultlib gdi32.lib 
version.lib   winspool.lib comctl32.lib advapi32.lib shell32.lib  /machine:i386 /nodefaultlib libcmt.lib 
oleaut32.lib  user32.lib      /nodefaultlib:python27.lib /nodefaultlib:python32.lib   "E:\tcl\lib\tclstub85.lib"
```

VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Aug 10 2013 14:38:33)
MS-Windows 32 位图形界面版本 带 OLE 支持
编译者 mool@tororo
大型版本 带图形界面。  可使用(+)与不可使用(-)的功能:
+arabic             +ex_extra           +mouseshape         +syntax
+autocmd            +extra_search       +multi_byte_ime/dyn +tag_binary
+balloon_eval       +farsi              +multi_lang         +tag_old_static
+browse             +file_in_path       -mzscheme           -tag_any_white
++builtin_terms     +find_in_path       +netbeans_intg      +tcl/dyn
+byte_offset        +float              +ole                -tgetent
+cindent            +folding            +path_extra         -termresponse
+clientserver       -footer             +perl/dyn           +textobjects
+clipboard          +gettext/dyn        +persistent_undo    +title
+cmdline_compl      -hangul_input       -postscript         +toolbar
+cmdline_hist       +iconv/dyn          +printer            +user_commands
+cmdline_info       +insert_expand      -profile            +vertsplit
+comments           +jumplist           +python/dyn         +virtualedit
+conceal            +keymap             +python3/dyn        +visual
+cryptv             +langmap            +quickfix           +visualextra
+cscope             +libcall            +reltime            +viminfo
+cursorbind         +linebreak          +rightleft          +vreplace
+cursorshape        +lispindent         +ruby/dyn           +wildignore
+dialog_con_gui     +listcmds           +scrollbind         +wildmenu
+diff               +localmap           +signs              +windows
+digraphs           -lua                +smartindent        +writebackup
-dnd                +menu               -sniff              -xfontset
-ebcdic             +mksession          +startuptime        -xim
+emacs_tags         +modify_fname       +statusline         -xterm_save
+eval               +mouse              -sun_workshop       +xpm_w32
     系统 vimrc 文件: "$VIM\vimrc"
     用户 vimrc 文件: "$HOME\_vimrc"
 第二用户 vimrc 文件: "$HOME\vimfiles\vimrc"
 第三用户 vimrc 文件: "$VIM\_vimrc"
      用户 exrc 文件: "$HOME\_exrc"
  第二用户 exrc 文件: "$VIM\_exrc"
    系统 gvimrc 文件: "$VIM\gvimrc"
    用户 gvimrc 文件: "$HOME\_gvimrc"
第二用户 gvimrc 文件: "$HOME\vimfiles\gvimrc"
第三用户 gvimrc 文件: "$VIM\_gvimrc"
        系统菜单文件: "$VIMRUNTIME\menu.vim"
编译方式: cl -c /W3 /nologo  -I. -Iproto -DHAVE_PATHDEF -DWIN32   -DFEAT_CSCOPE 
-DFEAT_NETBEANS_INTG   -DFEAT_XPM_W32   -DWINVER=0x0400 -D_WIN32_WINNT=0x0400  
/Fo.\ObjGOLYHTRi386/ /Ox /GL -DNDEBUG  /Zl /MT -DFEAT_OLE -DFEAT_MBYTE_IME 
-DDYNAMIC_IME -DFEAT_GUI_W32 -DDYNAMIC_ICONV -DDYNAMIC_GETTEXT -DFEAT_TCL 
-DDYNAMIC_TCL -DDYNAMIC_TCL_DLL=\"tcl85.dll\" -DDYNAMIC_TCL_VER=\"8.5\" -DFEAT_PYTHON 
-DDYNAMIC_PYTHON -DDYNAMIC_PYTHON_DLL=\"python27.dll\" -DFEAT_PYTHON3 
-DDYNAMIC_PYTHON3 -DDYNAMIC_PYTHON3_DLL=\"python32.dll\" -DFEAT_PERL -DDYNAMIC_PERL 
-DDYNAMIC_PERL_DLL=\"perl514.dll\" -DFEAT_RUBY -DDYNAMIC_RUBY -DDYNAMIC_RUBY_VER=19 
-DDYNAMIC_RUBY_DLL=\"msvcrt-ruby192.dll\" -DFEAT_BIG /Fd.\ObjGOLYHTRi386/ /Zi
链接方式: link /RELEASE /nologo /subsystem:windows /LTCG:STATUS oldnames.lib kernel32.lib 
advapi32.lib shell32.lib gdi32.lib  comdlg32.lib ole32.lib uuid.lib /machine:i386 /nodefaultlib gdi32.lib 
version.lib   winspool.lib comctl32.lib advapi32.lib shell32.lib  /machine:i386 /nodefaultlib libcmt.lib 
oleaut32.lib  user32.lib      /nodefaultlib:python27.lib /nodefaultlib:python32.lib   "E:\tcl\lib\tclstub85.lib"
```

Python 以安装7.4_64位版本 // 问题就出现在这里

今天再次打开vim下载目录查看，发现只有32位版本下载，所以基本可以断定，vim需求Python版本与安装的Python版本不一致，重新安装Python32位之后，Vim成功加载Python

