# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

password: Optional[str]
"""
Password, do not use if using target
"""

target: Optional[str]
"""
Target as in 'fly --target', do not use if using team/username/password
"""

team: Optional[str]
"""
Team name, do not use if using target
"""

url: Optional[str]
"""
URL, do not use if using target
"""

username: Optional[str]
"""
Username, do not use if using target
"""

